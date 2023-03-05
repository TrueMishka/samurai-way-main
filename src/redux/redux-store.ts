import {combineReducers, createStore} from "redux";
import profileReducer, {addPostCreator, setUserProfile, updateNewPostTextCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./users-reducer";
import authReducer, {setUserData} from "./auth-reducer";

export type ActionTypes = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserData>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
