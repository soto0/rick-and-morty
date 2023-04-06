import { FC } from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
    Error: any,
    Data: any,
    SetPage: any,
    Page: number | undefined
};

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
    const nextPage = props.Data?.info.next?.replace(/[^0-9]/g, "");
    const prevPage = props.Data?.info.prev?.replace(/[^0-9]/g, "");

    return (
        <>
            {
                !props.Error && props.Data && <>
                    <button className={styles.prev__pagination} onClick={() => { props.SetPage(prevPage) }} disabled={props.Page === 1}>Rick</button>
                    <button className={styles.next__pagination} onClick={() => { props.SetPage(nextPage) }} disabled={Number(props.Page) === props.Data.info.pages}>Morty</button>
                </>
            }
        </>
    );
};

export default Pagination;