import { FC, useState } from 'react';
import { charactersAPI } from "@/services/Characters";
import { ICharacters } from "@/models/ICharacters";
import Loader from "@/components/Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";
import Error from "@/components/Error/Error";
import styles from './CharactersList.module.scss';

type characterType = ICharacters;

const CharactersList: FC = () => {
    const [page, setPage] = useState<number>(1);
    const { data: characters, error, isLoading, isSuccess } = charactersAPI.useGetCharactersQuery(page);
    const nextPage = (characters as unknown as characterType)?.info.next?.slice(47);
    const prevPage = (characters as unknown as characterType)?.info.prev?.slice(47);

    return (
        <section className={styles.characters__list}>
            <div className="container">
                <div className={styles.characters__top}>
                    <h3 className={styles.title}>Characters</h3>
                    <button className={styles.prev__pagination} onClick={() => { setPage(prevPage) }} disabled={page === 1}>Rick</button>
                    <button className={styles.next__pagination} onClick={() => { setPage(nextPage) }} disabled={page === (characters as unknown as characterType)?.info.pages}>Morty</button>
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