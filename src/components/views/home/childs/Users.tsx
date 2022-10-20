import { User } from "../../../../interfaces/data/user";
import { EmptyData } from "../../../generic/EmptyData";
import { SingleUser } from "./SingleUser";

interface Props {
    users: User[];
}

export const Users = ({ users }: Props) => {
    if (users.length === 0) return <EmptyData />;

    return (
        <>
            <h1 className="mt-4 uppercase font-bold tracking-wider text-[1.4rem] mb-6">
                User list
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
                {users.map(({ id, ...props }) => (
                    <SingleUser key={`user-${id}`} user={{ id, ...props }} />
                ))}
            </div>
        </>
    );
};
