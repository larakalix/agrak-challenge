import { ActionType } from "@enums/enums";
import { User } from "@interfaces/data/user";

type FormField = {
    label: string;
    name: string;
};

export const INITIAL_VALUES: User = {
    id: "",
    first_name: "",
    second_name: "",
    email: "",
    avatar: "",
    createdAt: "",
};

export const FORM_FIELDS: FormField[] = [
    { label: "First Name", name: "first_name" },
    { label: "Second Name", name: "second_name" },
    { label: "Email", name: "email" },
    { label: "Avatar", name: "avatar" },
];

export const LABELS = {
    [ActionType.Edit]: {
        button: "Save",
        submit: "Updating user",
    },
    [ActionType.New]: {
        button: "Create",
        submit: "Creating user",
    },
};
