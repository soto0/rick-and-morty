import { FC } from 'react';
import styles from './CharactersList.module.scss';
import { charactersAPI } from "@/services/Characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import { ICharacters } from "@/models/ICharacters";

const CharactersList: FC = () => {
    const { data: characters, error, isLoading } = charactersAPI.useGetCharactersQuery();

    return (
        <section className={styles.characters__list}>
            <div className="container">
                <h3 className={styles.title}>Characters</h3>
                <div className={styles.characters__block}>
                    {
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