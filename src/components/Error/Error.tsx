import { FC } from "react";
import Image from "next/image";
import ErrorIcon from "./../../icons/Error/Error.png";

const Error: FC = () => {
    return (
        <div className="error">
            <Image src={ErrorIcon} alt="error" width={400} height={400} priority={true} blurDataURL={"./../../icons/Error/Error.png"} />
            <h1 className="error__title">Sorry, we"re having a technical problem</h1>
        </div>
    );
};

export default Error;