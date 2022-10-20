import { GenericImage } from "./image";

export interface User {
    id: string;
    first_name: string;
    second_name: string;
    email: string;
    avatar: string;
    createdAt: string;
}

export interface Thumbnail extends GenericImage {
    url: string;
}
