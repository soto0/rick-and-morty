import { FC, useState } from "react";
import { episodesAPI } from "@/services/Episodes";
import { IEpisodes } from "@/models/IEpisodes";
import Head from "next/head";
import Layout from "@/layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import styles from "./../styles/Episodes.module.scss";

const Episodes: FC = () => {
    const [page, setPage] = useState<number>(1);
    const { data: episodes, error, isLoading, isSuccess } = episodesAPI.useGetEpisodesQuery(page, { pollingInterval: 300000 });

    return (
        <>
            <Head>
                <title>Episodes | Rick And Morty</title>
            </Head>
            <Layout>
                <div className="container">
                    <div className={styles.episodes__top}>
                        <h3 className={styles.episodes__title}>Episodes</h3>
                        <Pagination Error={error} Data={episodes} SetPage={setPage} Page={page} />
                    </div>
                    <div className={styles.episodes__list}>
                        {error && <Error />}
                        {isLoading && <Loader />}
                        {
                            episodes && isSuccess && episodes.results.map((episode: IEpisodes) => {
                                return (
                                    <div className={styles.episode__card} key={episode.id}>
                                        <p className={styles.name}>{episode.name}</p>
                                        <h5 className={styles.title}>Episode</h5>
                                        <p className={styles.episode}>{episode.episode}</p>
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

export default Episodes;