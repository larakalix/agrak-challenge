import { GenericImage } from "./image";

export interface User {
    id: string | number;
    first_name: string;
    second_name: string;
    email: string;
    avatar: Thumbnail;
}

export interface Thumbnail extends GenericImage {
    url: string;
}
