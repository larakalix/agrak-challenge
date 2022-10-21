import { ActionStateType } from "@enums/enums";

export interface ActionStore {
    action: ActionStateType;
    setAction: (action: ActionStateType) => void;
}
