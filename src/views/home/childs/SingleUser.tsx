import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { Avatar } from "@components/generic/user/Avatar";
import { User } from "@interfaces/data/user";

interface Props {
    user: User;
}

export const SingleUser = ({ user }: Props) => {
    return (
        <div className="shadow-sm rounded-sm py-8 px-4 w-full bg-white">
            <Avatar id={user.id} alt={user.first_name} avatar={user.avatar} />

            <Link to={`/user/${user.id}`}>
                <h1 className="text-center text-[0.9rem]">{user.first_name}</h1>
                <h2 className="text-center text-[0.8rem]">
                    {user.second_name}
                </h2>
                <span className="block text-center text-[0.8rem] text-gray-800">
                    {user.email}
                </span>
            </Link>

            <footer>
                <ul className="flex items-center justify-center mt-8 space-x-3">
                    <li>
                        <Link to={`/user/${user.id}`}>
                            <div className="bg-green-400 p-2 text-white flex items-center justify-center rounded-sm shadow-sm">
                                <FiEdit />
                            </div>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
