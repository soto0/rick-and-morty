import { FC } from 'react';
import styles from './Status.module.scss';

interface StatusProps {
    Status: string,
    Species: string;
};

const Status: FC<StatusProps> = (props: StatusProps) => {
    return (
        <div className={styles.bio__block}>
            <span className={props.Status === 'Alive' ? styles.status__ellipse__alive : styles.status__ellipse__dead}></span>
            <p className={styles.bio}>{props.Status} | {props.Species}</p>
        </div>
    );
};

export default Status;