import { FC } from 'react';
import Image from "next/image";
import Head from "next/head";
import Layout from "@/layout/Layout";
import ErrorIcon from './../icons/Error/error.png';

const NotFound: FC = () => {
    return (
        <>
            <Head>
                <title>404 | Rick And Morty</title>
            </Head>
            <Layout>
                <div className="error">
                    <Image src={ErrorIcon} alt="error" width={400} height={400} priority={true} />
                    <h1 className="error__title">404 Not Found</h1>
                </div>
            </Layout>
        </>
    );
};

export default NotFound;