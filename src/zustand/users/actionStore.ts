import create from "zustand";
import { ActionStateType } from "@enums/enums";
import { ActionStore } from "@interfaces/store/ActionStore";

const useActionStore = create<ActionStore>((set) => ({
    action: ActionStateType.None,
    setAction: (action) => set({ action }),
}));

export default useActionStore;
