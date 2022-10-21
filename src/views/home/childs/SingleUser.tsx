import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Avatar } from "@components/generic/user/Avatar";
import { SingleUserProps } from "@interfaces/components/User";
import useUserStore from "@zustand/users/userStore";

export const SingleUser = ({ user }: SingleUserProps) => {
    const { fetch, deleteUser } = useUserStore((state) => state);

    const handleDelete = async () => {
        const response = await deleteUser(user.id);

        if (response) fetch();
    };

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
                    <li>
                        <button
                            className="bg-red-600 p-2 text-white flex items-center justify-center rounded-sm shadow-sm"
                            onClick={handleDelete}
                        >
                            <FiTrash />
                        </button>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
