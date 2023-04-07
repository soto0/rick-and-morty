import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from './../../icons/Logo/logo.png';

const Header: FC = () => {
    return (
        <header>
            <div className="header__container container">
                <Link href="/" className={styles.logo}>
                    <Image src={Logo} alt="logo" width={60} height={60} priority={true} />
                </Link>
                <nav className={styles.navbar}>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link href='/Characters' className={styles.navbar__link}>Characters</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link href='/Locations' className={styles.navbar__link}>Locations</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link href='/Episodes' className={styles.navbar__link}>Episodes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;