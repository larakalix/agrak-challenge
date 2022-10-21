import { User } from "../data/user";

export interface UserStore {
    users: User[];
    user: User | null;
    fetch: () => void;
    setUser: (payload: User | null) => void;
    getUser: (id: string | undefined) => void;
    createUser: (payload: User) => Promise<User>;
    updateUser: (id: string, payload: User) => void;
    deleteUser: (id: string) => Promise<boolean>;
}
