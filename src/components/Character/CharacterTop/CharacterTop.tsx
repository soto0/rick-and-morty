import { FC } from 'react';
import Image from "next/image";
import styles from './CharacterTop.module.scss';
import Status from "./../../Status/Status";

const CharacterTop: FC = () => {
    return (
        <section className={styles.character__top}>
            <div className="container">
                <Image className={styles.image} src='https://rickandmortyapi.com/api/character/avatar/178.jpeg' width={300} height={300} alt="icon" />
                <h3 className={styles.name}>Jerry Smith</h3>
                <Status Status={'da'} Species={'da'} />
            </div>
        </section>
    );
};

export default CharacterTop;