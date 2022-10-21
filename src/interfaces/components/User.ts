import { User } from "@interfaces/data/user";

export interface SingleUserProps {
    user: User;
}

export interface UsersProps {
    users: User[];
}

export interface AvatarProps {
    id: string;
    alt: string;
    avatar: string;
    avoidRedirect?: boolean;
}
