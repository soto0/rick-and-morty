import { FC } from 'react';
import Head from 'next/head';
import Layout from "@/layout/Layout";
import CharacterTop from "@/components/Character/CharacterTop";

const Character: FC = () => {
    return (
        <>
            <Head>
                <title>Character | Rick And Morty</title>
            </Head>
            <Layout>
                <CharacterTop />
            </Layout>
        </>
    );
};

export default Character;