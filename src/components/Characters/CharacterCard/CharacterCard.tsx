import { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import Status from "@/components/Status/Status";
import styles from './CharacterCard.module.scss';

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
    const LocationId = props.LocationUrl.slice(41);

    return (
        <div className={styles.character__card}>
            <Image className={styles.character__card__icon} src={props.Image} alt={props.Name} width={254} height={224} priority={true} />
            <div className={styles.character__card__info}>
                <Link href={"/Character/" + props.Id} className={styles.name}>{props.Name}</Link>
                <Status Status={props.Status} Species={props.Species} />
                <div className={styles.location__block}>
                    <h5 className={styles.info__title}>Last known location:</h5>
                    <Link href={"/Location/" + LocationId} className={styles.info__text}>{props.LastLocation}</Link>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;