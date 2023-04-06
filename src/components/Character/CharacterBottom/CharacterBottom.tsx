import { FC } from 'react';
import Link from "next/link";
import styles from './CharacterBottom.module.scss';

const CharacterBottom: FC = () => {
    return (
        <section className={styles.character__bottom}>
            <div className="container">
                <div className={styles.info}>
                    <h4 className={styles.title}>Origin</h4>
                    <Link href="/Location/1" className={styles.info__text}>Earth (C-500A)</Link>
                    <h4 className={styles.title}>Last Location</h4>
                    <Link href="/Location/1" className={styles.info__text}>Earth (C-500A)</Link>
                </div>
            </div>
        </section>
    );
};

export default CharacterBottom;