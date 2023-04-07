import { FC } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import CategoryCards from "@/components/CategoryCard/CategoryCards";


const Categories: FC = () => {
    return (
        <>
            <Head>
                <title>Categories | Rick And Morty</title>
            </Head>
            <Layout>
                <CategoryCards />
            </Layout>
        </>
    );
};

export default Categories;