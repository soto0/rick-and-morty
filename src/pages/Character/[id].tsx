import { FC, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout/Layout";
import Status from "@/components/Status/Status";
import { charactersAPI } from "@/services/Characters";
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
                {character && isSuccess && <>
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
                                <h4 className={styles.title}>Origin</h4>
                                <Link href={"/Location/" + character.origin.url} className={styles.info__text}>{character.origin.name}</Link>
                                <h4 className={styles.title}>Last Location</h4>
                                <Link href={"/Location/" + character.location.url} className={styles.info__text}>{character.location.name}</Link>
                            </div>
                        </div>
                    </section>
                </>}
            </Layout>
        </>
    );
};

export default Character;