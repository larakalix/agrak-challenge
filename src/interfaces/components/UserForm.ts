import { ActionType } from "@enums/enums";
import { User } from "@interfaces/data/user";

export interface UserFormProps {
    user: User;
    type: ActionType;
}
