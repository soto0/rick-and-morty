import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/layout/Layout";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import { locationsAPI } from "@/services/Locations";
import { ILocations } from "@/models/ILocations";
import styles from './../styles/Locations.module.scss';

const Locations: FC = () => {
    const { data: locations, error, isLoading, isSuccess } = locationsAPI.useGetLocationsQuery();

    return (
        <>
            <Head>
                <title>Locations | Rick And Morty</title>
            </Head>
            <Layout>
                <div className="container">
                    <h3 className={styles.locations__title}>Locations</h3>
                    <div className={styles.locations__list}>
                        {error && <Error />}
                        {isLoading && <Loader />}
                        {
                            locations && isSuccess && locations.results.map((location: ILocations) => {
                                return (
                                    <div className={styles.location__card}>
                                        <Link href={"/Character/" + location.id} className={styles.name}>{location.name}</Link>
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