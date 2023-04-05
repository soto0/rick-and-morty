import { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './CategoryCards.module.scss';
import CharactersIcon from './../../icons/Categories/character.png';
import LocationsIcon from './../../icons/Categories/location.png';
import EpisodesIcon from './../../icons/Categories/episode.png';

const CategoryCards: FC = () => {
    return (
        <section className={styles.categories}>
            <div className="container">
                <div className={styles.categories__block}>
                    <Link href="/Characters" className={styles.category__block}>
                        <Image src={CharactersIcon} alt="characters" className={styles.category__icon} />
                        <h3 className={styles.title}>Characters</h3>
                    </Link>
                    <Link href="/Locations" className={styles.category__block}>
                        <Image src={LocationsIcon} alt="characters" className={styles.category__icon} />
                        <h3 className={styles.title}>Locations</h3>
                    </Link>
                    <Link href="/Episodes" className={styles.category__block}>
                        <Image src={EpisodesIcon} alt="characters" className={styles.category__icon} />
                        <h3 className={styles.title}>Episodes</h3>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;