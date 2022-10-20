import { User } from "../../../../interfaces/data/user";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Avatar } from "./Avatar";

interface Props {
    user: User;
}

export const SingleUser = ({ user }: Props) => {
    return (
        <div className="shadow-sm rounded-sm py-8 px-4 w-full">
            <Avatar alt={user.first_name} thumbnail={user.avatar} />

            <h1 className="text-center text-[0.9rem]">{user.first_name}</h1>
            <h2 className="text-center text-[0.8rem]">{user.second_name}</h2>

            <footer>
                <ul className="flex items-center justify-center mt-8 space-x-3">
                    <li className="bg-green-400 p-2 text-white flex items-center justify-center rounded-sm shadow-sm">
                        <button>
                            <FiEdit />
                        </button>
                    </li>
                    <li className="bg-red-400 p-2 text-white flex items-center justify-center rounded-sm shadow-sm">
                        <button>
                            <FiTrash />
                        </button>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
