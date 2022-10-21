import { useNavigate, useParams } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { ViewWrapper } from "@components/wrapper/ViewWrapper";
import { useDetail } from "./hooks/useDetail";
import { Avatar } from "@components/generic/user/Avatar";
import { UserForm } from "./childs";
import { ActionType } from "@enums/enums";
import { Message } from "@components/generic/Message";
import useUserStore from "@zustand/users/userStore";

export const UserView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useDetail(id);
    const { deleteUser } = useUserStore((state) => state);

    const type = id ? ActionType.Edit : ActionType.New;
    const title = {
        [ActionType.Edit]: "Edit user",
        [ActionType.New]: "Create user",
    }[type];

    const handleDelete = async (id: string) => {
        const response = await deleteUser(id);

        if (response) navigate("/");
    };

    if (!user) return <Message message="Retreiving data" />;

    return (
        <ViewWrapper showActions>
            <h1 className="mb-8 uppercase">{title}</h1>

            <div className="shadow-sm rounded-sm p-10 bg-white w-full max-w-md flex items-center flex-col relative">
                {type === ActionType.Edit && (
                    <div className="absolute top-4 right-4">
                        <button
                            className="bg-red-600 p-2 text-white flex items-center justify-center rounded-sm shadow-sm"
                            onClick={() => handleDelete(id!)}
                        >
                            <FiTrash />
                        </button>
                    </div>
                )}

                <Avatar
                    id={user.id}
                    alt={user.first_name}
                    avatar={user.avatar}
                    avoidRedirect
                />

                <UserForm user={user} type={type} />
            </div>
        </ViewWrapper>
    );
};
