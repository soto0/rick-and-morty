import { FC, useEffect } from 'react';
import { useRouter } from "next/router";
import { charactersAPI } from "@/services/Characters";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout/Layout";
import Status from "@/components/Status/Status";
import Loader from "@/components/Loader/Loader";
import Error from "@/components/Error/Error";
import styles from './Character.module.scss';

const Character: FC = () => {
    const CharacterId = useRouter();
    const [getCharacter, { data: character, error, isLoading, isSuccess }] = charactersAPI.useLazyGetCharacterQuery();

    useEffect(() => {
        if (CharacterId.query.id) {
            getCharacter(Number(CharacterId.query.id));
        };
    }, [CharacterId]);

    return (
        <>
            <Head>
                <title>{character && character.name} | Rick And Morty</title>
            </Head>
            <Layout>
                {error && <Error />}
                {isLoading && <Loader />}
                {
                    character && isSuccess && <>
                        <section className={styles.character__top}>
                            <div className="container">
                                <Image className={styles.image} src={character.image} width={300} height={300} alt="icon" />
                                <h3 className={styles.name}>{character.name}</h3>
                                <Status Status={character.status} Species={character.species} />
                            </div>
                        </section>
                        <section className={styles.character__bottom}>
                            <div className="container">
                                <div className={styles.info}>
                                    <div className={styles.info__block}>
                                        <h4 className={styles.title}>Origin</h4>
                                        {
                                            character.origin.name !== 'unknown' ?
                                                <Link href={"/Location/" + character.origin.url.slice(41)} className={styles.info__text}>{character.origin.name}</Link> :
                                                <p className={styles.info__text}>{character.origin.name}</p>
                                        }
                                    </div>
                                    <div className={styles.info__block}>
                                        <h4 className={styles.title}>Last Location</h4>
                                        <Link href={"/Location/" + character.location.url.slice(41)} className={styles.info__text}>{character.location.name}</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                }
            </Layout>
        </>
    );
};

export default Character;