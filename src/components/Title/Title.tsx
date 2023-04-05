import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Title.module.scss';
import MainIcon from './../../icons/Title/main.png';

const Title: FC = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__block}>
                    <div className={styles.text__block}>
                        <h1 className={styles.title}>A large collection of characters, locations and episodes of the cult animated series.</h1>
                        <Link href="/Categories" className="main__button button">Taste</Link>
                    </div>
                    <Image src={MainIcon} alt="rick and morty" width={800} height={800} />
                </div>
            </div>
        </section>
    );
};

export default Title;