import { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './CharacterCard.module.scss';
import { charactersAPI } from "@/services/Characters";

interface CharacterCard {
    Id: number,
    Name: string,
    Status: string,
    Species: string,
    LastLocation: string,
    LocationUrl: string,
    Image: string,
};

const CharacterCard: FC<CharacterCard> = (props: CharacterCard) => {
    return (
        <div className={styles.character__card}>
            <Image className={styles.character__card__icon} src={props.Image} alt="card" width={254} height={224} />
            <div className={styles.character__card__info}>
                <Link href={"/Character/" + props.Id} className={styles.name}>{props.Name}</Link>
                <div className={styles.bio__block}>
                    <span className={props.Status === 'Alive' ? styles.status__ellipse__alive : styles.status__ellipse__dead}></span>
                    <p className={styles.bio}>{props.Status} | {props.Species}</p>
                </div>
                <div className={styles.location__block}>
                    <h5 className={styles.info__title}>Last known location:</h5>
                    <Link href={"/Location/" + props.LocationUrl} className={styles.info__text}>{props.LastLocation}</Link>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;