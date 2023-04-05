import { FC } from 'react';
import Head from 'next/head';
import Layout from "@/layout/Layout";
import Filter from "@/components/Characters/Filter/Filter";

const Characters: FC = () => {
    return (
        <>
            <Head>
                <title>Characters | Rick And Morty</title>
            </Head>
            <Layout>
                <Filter />
            </Layout>
        </>
    );
};

export default Characters;