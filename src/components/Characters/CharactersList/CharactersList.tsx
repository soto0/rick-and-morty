import { FC } from 'react';
import styles from './CharactersList.module.scss';
import { charactersAPI } from "@/services/Characters";
import { ICharacters } from "@/models/ICharacters";
import Loader from "@/components/Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharactersList: FC = () => {
    const { data: characters, error, isLoading, isSuccess } = charactersAPI.useGetCharactersQuery();

    return (
        <section className={styles.characters__list}>
            <div className="container">
                <h3 className={styles.title}>Characters</h3>
                <div className={styles.characters__block}>
                    {error && <h1>da</h1>}
                    {isLoading && <Loader />}
                    {isSuccess &&
                        characters && characters.map((character: ICharacters) => {
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