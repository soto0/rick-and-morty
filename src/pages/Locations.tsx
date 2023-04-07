import { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/layout/Layout";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import { locationsAPI } from "@/services/Locations";
import { ILocations } from "@/models/ILocations";
import styles from "./../styles/Locations.module.scss";
import Pagination from "@/components/Pagination/Pagination";

const Locations: FC = () => {
    const [page, setPage] = useState<number>(1);
    const { data: locations, error, isLoading, isSuccess } = locationsAPI.useGetLocationsQuery(page, { pollingInterval: 300000 });

    return (
        <>
            <Head>
                <title>Locations | Rick And Morty</title>
            </Head>
            <Layout>
                <div className="container">
                    <div className={styles.locations__top}>
                        <h3 className={styles.locations__title}>Locations</h3>
                        <Pagination Error={error} Data={locations} SetPage={setPage} Page={page} />
                    </div>
                    <div className={styles.locations__list}>
                        {error && <Error />}
                        {isLoading && <Loader />}
                        {
                            locations && isSuccess && locations.results.map((location: ILocations) => {
                                return (
                                    <div className={styles.location__card} key={location.id}>
                                        <Link href={"/Location/" + location.id} className={styles.name}>{location.name}</Link>
                                        <h5 className={styles.title}>Dimension</h5>
                                        <p className={styles.dimension}>{location.dimension}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Locations;