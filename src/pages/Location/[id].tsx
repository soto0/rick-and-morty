import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { locationsAPI } from "@/services/Locations";
import { ILocation } from "@/models/ILocation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from "next/head";
import Layout from "@/layout/Layout";
import CharacterCard from "@/components/Characters/CharacterCard/CharacterCard";
import styles from "./Locations.module.scss";
import 'swiper/css';

const Location: FC = () => {
    const LocationId = useRouter();
    const [getLocation, { data: Location, error, isLoading, isSuccess }] = locationsAPI.useLazyGetLocationQuery();
    const [getResidents, { data: residents }] = locationsAPI.useLazyGetResidentsQuery();


    useEffect(() => {
        if (LocationId.query.id) {
            getLocation(Number(LocationId.query.id))
        }

        if (Location && Location.residents) {
            const residentsIds = Location.residents.map((resident: string) => resident.match(/\d+/));
            getResidents(residentsIds);
        }
    }, [LocationId, Location]);

    return (
        <>
            <Head>
                <title>{Location && Location.name} | Rick And Morty</title>
            </Head>
            <Layout>
                <section className={styles.location}>
                    <div className="container">
                        {
                            Location && isSuccess && <>
                                <h3 className={styles.title}>{Location.name}</h3>
                                <h5 className={styles.subtitle}>Type</h5>
                                <p className={styles.location__text}>{Location.type}</p>
                                <h5 className={styles.subtitle}>Dimension</h5>
                                <p className={styles.location__text}>{Location.dimension}</p>
                            </>
                        }
                        <div className={styles.residents__block}>
                            <h3 className={styles.title}>Residents</h3>
                            <div className={styles.residents__slider}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={3}
                                >
                                    {
                                        residents && residents.map((resident: ILocation) => {
                                            return (
                                                <SwiperSlide className={styles.slide}>
                                                    <CharacterCard
                                                        Id={resident.id}
                                                        Name={resident.name}
                                                        Status={resident.status}
                                                        Species={resident.species}
                                                        LastLocation={resident.location.name}
                                                        LocationUrl={resident.location.url}
                                                        Image={resident.image}
                                                        key={resident.id}
                                                    />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Location;