import { createContext, useContext } from "react";
import ActivityStore from "./activity-store";
import CommentStore from "./commentStore";
import CommonStore from "./common-store";
import ModalStore from "./modal-store";
import ProfileStore from "./profileStore";
import UserStore from "./user-store";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore: CommentStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore : new CommentStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}