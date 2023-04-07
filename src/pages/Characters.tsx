import { FC, useState } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import Filter from "@/components/Characters/Filter/Filter";
import CharactersList from "@/components/Characters/CharactersList/CharactersList";

const Characters: FC = () => {
    const [status, setStatus] = useState();
    const [page, setPage] = useState<number>(1);
    const [gender, setGender] = useState();
    const [name, setName] = useState();

    return (
        <>
            <Head>
                <title>Characters | Rick And Morty</title>
            </Head>
            <Layout>
                <Filter SetStatus={setStatus} SetPage={setPage} SetGender={setGender} SetName={setName} />
                <CharactersList Status={status} SetPage={setPage} Page={page} Gender={gender} Name={name} />
            </Layout>
        </>
    );
};

export default Characters;