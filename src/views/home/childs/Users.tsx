import { Message } from "@components/generic/Message";
import { SingleUser } from "./SingleUser";
import { UsersProps } from "@interfaces/components/User";

export const Users = ({ users }: UsersProps) => {
    if (users.length === 0) return <Message message="No data found" />;

    return (
        <>
            <h1 className="mt-4 uppercase font-bold tracking-wider text-[1.4rem] mb-6">
                User list
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full pb-14">
                {users.map(({ id, ...props }) => (
                    <SingleUser key={`user-${id}`} user={{ id, ...props }} />
                ))}
            </div>
        </>
    );
};
