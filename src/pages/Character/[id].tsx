import { FC, useEffect } from 'react';
import Head from 'next/head';
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import { ICharacter } from "@/models/ICharacter";
import { charactersAPI } from "@/services/Characters";
import CharacterTop from "@/components/Character/CharacterTop/CharacterTop";
import CharacterBottom from "@/components/Character/CharacterBottom/CharacterBottom";

type characterType = ICharacter

const Character: FC = () => {
    const CharacterId = useRouter();
    const [trigger, { data: character, error, isLoading, isSuccess }] = charactersAPI.useLazyGetCharacterQuery();

    useEffect(() => {
        if (CharacterId.query.id) {
            trigger(Number(CharacterId.query.id));
        };
    }, [CharacterId]);

    return (
        <>
            <Head>
                <title>{(character as unknown as characterType)?.name} | Rick And Morty</title>
            </Head>
            <Layout>
                <CharacterTop />
                <CharacterBottom />
            </Layout>
        </>
    );
};

export default Character;