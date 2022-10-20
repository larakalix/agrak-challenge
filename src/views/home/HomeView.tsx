import { ViewWrapper } from "@components/wrapper/ViewWrapper";
import { Users } from "./childs";
import { useHome } from "./hooks/useHome";

export const HomeView = () => {
    const { users } = useHome();

    return (
        <ViewWrapper>
            <Users users={users} />
        </ViewWrapper>
    );
};
