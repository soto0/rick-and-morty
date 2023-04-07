import { FC } from "react";
import Image from "next/image";
import LoaderGif from "./../../icons/Loading/loading.gif";

const Loader: FC = () => {
    return (
        <Image src={LoaderGif} width={250} height={200} alt="loader" className="loader" priority={true} />
    );
};

export default Loader;