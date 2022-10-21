import { AvatarProps } from "@interfaces/components/Avatar";
import { Link } from "react-router-dom";

export const Avatar = ({
    id,
    alt,
    avatar,
    avoidRedirect = false,
}: AvatarProps) => {
    const Body = () => (
        <div className="flex items-center justify-center max-w-[5rem] m-auto rounded-full border-2 border-black overflow-hidden h-[5rem] w-[5rem] my-3">
            <img
                className="rounded-full"
                src={avatar ? avatar : "/nouser.png"}
                alt={alt}
                width="78"
                height="78"
            />
        </div>
    );

    if (avoidRedirect) return <Body />;

    return (
        <Link to={`/user/${id}`}>
            <Body />
        </Link>
    );
};
