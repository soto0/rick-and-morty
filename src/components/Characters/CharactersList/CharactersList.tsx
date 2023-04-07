import { FC } from "react";
import { charactersAPI } from "@/services/Characters";
import { ICharacters } from "@/models/ICharacters";
import Pagination from "@/components/Pagination/Pagination";
import CharacterCard from "../CharacterCard/CharacterCard";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import styles from "./CharactersList.module.scss";

interface CharactersProps {
    SetPage: any,
    Status: string | undefined,
    Page: number | undefined,
    Gender: string | undefined,
    Name: string | undefined
};

const CharactersList: FC<CharactersProps> = (props: CharactersProps) => {
    const { data: characters, error, isLoading, isSuccess } = charactersAPI.useGetCharactersQuery({ page: props.Page, status: props.Status, gender: props.Gender, name: props.Name }, { pollingInterval: 300000 });

    return (
        // TODO: добавить обновление данных каждые 5 минут
        <section className={styles.characters__list}>
            <div className="container">
                <div className={styles.characters__top}>
                    <h3 className={styles.title}>Characters</h3>
                    <Pagination
                        Error={error}
                        Data={characters}
                        SetPage={props.SetPage}
                        Page={props.Page}
                    />
                </div>
                <div className={styles.characters__block}>
                    {error && <Error />}
                    {isLoading && <Loader />}
                    {isSuccess &&
                        characters && characters.results.map((character: ICharacters) => {
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
        </section >
    );
};

export default CharactersList;