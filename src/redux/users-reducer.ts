import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

export type UserDataType = {
    name: string
    id: number
    uniqueUrlName: string | undefined
    photos: {
        small: string | undefined
        large: string | undefined
    }
    status: string | undefined
    followed: boolean
}

const initialState = {
    users: [] as UserDataType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type PageUsersStateType = typeof initialState

const usersReducer = (state: PageUsersStateType = initialState, action: ActionTypes): PageUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true}: u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false}: u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: UserDataType[]) => ({type: SET_USERS, users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

export default usersReducer