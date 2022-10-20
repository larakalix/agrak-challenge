import { useParams } from "react-router-dom";
import { ViewWrapper } from "@components/wrapper/ViewWrapper";
import { useDetail } from "./hooks/useDetail";
import { Avatar } from "@components/generic/user/Avatar";
import { UserForm } from "./childs";
import { ActionType } from "@enums/enums";
import { Message } from "@components/generic/Message";

export const UserView = () => {
    const { id } = useParams();
    const { user } = useDetail(id);

    const type = id ? ActionType.Edit : ActionType.New;
    const title = {
        [ActionType.Edit]: "Edit user",
        [ActionType.New]: "Create user",
    }[type];

    if (!user) return <Message message="Retreiving data" />;

    return (
        <ViewWrapper>
            <h1 className="mb-8 uppercase">{title}</h1>

            <div className="shadow-sm rounded-sm p-10 bg-white w-full max-w-md flex items-center flex-col">
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
