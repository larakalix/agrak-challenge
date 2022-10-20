import { useParams } from "react-router-dom";
import { ViewWrapper } from "../../wrapper/ViewWrapper";
import { Avatar } from "../home/childs";
import { useDetail } from "./hooks/useDetail";

enum ActionType {
    New,
    Edit,
}

export const UserView = () => {
    const { id } = useParams();
    const { user } = useDetail(id);

    const type = id ? ActionType.Edit : ActionType.New;
    const title = {
        [ActionType.Edit]: "Edit user",
        [ActionType.New]: "Create user",
    }[type];

    if (!user) return null;

    return (
        <ViewWrapper>
            <h1>{title}</h1>

            <div className="shadow-sm rounded-sm p-10 bg-white">
                <Avatar
                    id={user.id}
                    alt={user.first_name}
                    thumbnail={user.avatar}
                />

                <h1 className="text-center text-[0.9rem]">{user.first_name}</h1>
                <h2 className="text-center text-[0.8rem]">
                    {user.second_name}
                </h2>
                <span className="block text-center text-[0.8rem] text-gray-800">
                    {user.email}
                </span>
            </div>
        </ViewWrapper>
    );
};
