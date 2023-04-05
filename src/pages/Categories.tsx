import { FC } from "react";
import Head from 'next/head';
import Layout from "@/layout/Layout";
import CategoryCard from "@/components/CategoryCard/CategoryCard";


const Categories: FC = () => {
    return (
        <>
            <Head>
                <title>Categories | Rick And Morty</title>
            </Head>
            <Layout>
                <CategoryCard />
            </Layout>
        </>
    );
};

export default Categories;