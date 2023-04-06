import { FC, useState } from 'react';
import { charactersAPI } from "@/services/Characters";
import { ICharacters } from "@/models/ICharacters";
import Loader from "@/components/Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";
import Error from "@/components/Error/Error";
import styles from './CharactersList.module.scss';

interface CharactersProps {
    SetPage: any,
    Status: string | undefined,
    Page: number | undefined,
    Gender: string | undefined,
    Name: string | undefined
};

type characterType = ICharacters;

const CharactersList: FC<CharactersProps> = (props: CharactersProps) => {
    const { data: characters, error, isLoading, isSuccess } = charactersAPI.useGetCharactersQuery({ page: props.Page, status: props.Status, gender: props.Gender, name: props.Name });
    const nextPage = (characters as unknown as characterType)?.info.next?.replace(/[^0-9]/g, "");
    const prevPage = (characters as unknown as characterType)?.info.prev?.replace(/[^0-9]/g, "");

    return (
        <section className={styles.characters__list}>
            <div className="container">
                <div className={styles.characters__top}>
                    <h3 className={styles.title}>Characters</h3>
                    {
                        !error && <>
                            <button className={styles.prev__pagination} onClick={() => { props.SetPage(prevPage) }} disabled={props.Page === 1}>Rick</button>
                            <button className={styles.next__pagination} onClick={() => { props.SetPage(nextPage) }} disabled={props.Page === (characters as unknown as characterType)?.info.pages}>Morty</button>
                        </>
                    }
                </div>
                <div className={styles.characters__block}>
                    {error && <Error />}
                    {isLoading && <Loader />}
                    {isSuccess &&
                        characters && (characters as unknown as characterType).results.map((character: ICharacters) => {
                            return (
                                <CharacterCard
                                    Id={character.id}
                                    Name={character.name}
                                    Status={character.status}
                                    Species={character.species}
                                    LastLocation={character.location.name}
                                    LocationUrl={character.location.url}
                                    Image={character.image}
                                    key={character.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default CharactersList;