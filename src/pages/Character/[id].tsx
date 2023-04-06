import { FC, useEffect } from 'react';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout/Layout";
import Status from "@/components/Status/Status";
import { useRouter } from "next/router";
import { ICharacter } from "@/models/ICharacter";
import { charactersAPI } from "@/services/Characters";
import styles from './Character.module.scss';

type characterType = ICharacter;

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
                <title>{(character as unknown as characterType)?.name} | Rick And Morty</title>
            </Head>
            <Layout>
                <section className={styles.character__top}>
                    <div className="container">
                        <Image className={styles.image} src='https://rickandmortyapi.com/api/character/avatar/178.jpeg' width={300} height={300} alt="icon" />
                        <h3 className={styles.name}>Jerry Smith</h3>
                        <Status Status={'da'} Species={'da'} />
                    </div>
                </section>
                <section className={styles.character__bottom}>
                    <div className="container">
                        <div className={styles.info}>
                            <h4 className={styles.title}>Origin</h4>
                            <Link href="/Location/1" className={styles.info__text}>Earth (C-500A)</Link>
                            <h4 className={styles.title}>Last Location</h4>
                            <Link href="/Location/1" className={styles.info__text}>Earth (C-500A)</Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Character;