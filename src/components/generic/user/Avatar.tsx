import { Link } from "react-router-dom";
import { Thumbnail } from "../../../interfaces/data/user";

interface Props {
    id: string;
    alt: string;
    thumbnail: Thumbnail;
}

export const Avatar = ({ id, alt, thumbnail }: Props) => {
    return (
        <Link to={`/user/${id}`}>
            <div className="flex items-center justify-center max-w-[5rem] m-auto rounded-full border-2 border-black overflow-hidden h-[5rem] w-[5rem] my-3">
                <img
                    className="rounded-full"
                    src={thumbnail.url}
                    alt={alt}
                    width="78"
                    height="78"
                />
            </div>
        </Link>
    );
};
