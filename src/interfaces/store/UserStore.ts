import { User } from "../data/user";

export interface UserStore {
    users: User[];
    fetch: () => void;
}
