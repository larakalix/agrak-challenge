import { User } from "../data/user";

export interface UserStore {
    users: User[];
    user: User | null;
    fetch: () => void;
    getUser: (id: string) => void;
    cleanUser: () => void;
}
