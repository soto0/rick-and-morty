import { FC } from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from './CharactersList.module.scss';

const CharactersList: FC = () => {
    return (
        <section className={styles.characters__list}>
            <div className="container">
                <h3 className={styles.title}>Characters</h3>
                <div className={styles.characters__block}>
                    // тестовые блоки
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                </div>
            </div>
        </section>
    );
};

export default CharactersList;