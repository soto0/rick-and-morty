import { FC } from 'react';
import Layout from '@/layout/Layout'
import Head from 'next/head'
import Title from '@/components/Title/Title';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Main | Rick And Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Title />
      </Layout>
    </>
  );
};

export default Home;
