import { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './CharacterCard.module.scss';

const CharacterCard: FC = () => {
    return (
        <div className={styles.character__card}>
            <Image className={styles.character__card__icon} src='https://rickandmortyapi.com/api/character/avatar/254.jpeg' alt="card" width={254} height={224} />
            <div className={styles.character__card__info}>
                <Link href='/Character/1' className={styles.name}>Rick Sanches</Link>
                <div className={styles.bio__block}>
                    <span className={styles.status__ellipse__alive}></span>
                    <p className={styles.bio}>Alive | Human</p>
                </div>
                <div className={styles.location__block}>
                    <h5 className={styles.info__title}>Last known location:</h5>
                    <Link href='/Location/1' className={styles.info__text}>Citadel of Ricks</Link>
                </div>
                <div className={styles.seen__block}>
                    <h5 className={styles.info__title}>First seen in:</h5>
                    <Link href='/Episode/1' className={styles.info__text}>The Ricklantis Mixup</Link>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;