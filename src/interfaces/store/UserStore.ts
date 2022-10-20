import { User } from "../data/user";

export interface UserStore {
    users: User[];
    user: User | null;
    loading: boolean;
    fetch: () => void;
    setUser: (payload: User | null) => void;
    setLoading: () => void;
    getUser: (id: string) => void;
    createUser: (payload: User) => Promise<User>;
    updateUser: (id: string, payload: User) => void;
}
