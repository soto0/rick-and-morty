import { FC } from 'react';
import styles from './CategoryCards.module.scss';

const CategoryCards: FC = () => {
    return (
        <section className={styles.categories}>
            <div className="container">
                <div className={styles.categories__block}>
                    <div className={styles.category__block}>
                        <h3 className={styles.title}>Characters</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;