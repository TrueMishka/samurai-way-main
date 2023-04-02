import {ActionTypes, AppDispatch, AppThunk} from "./redux-store";
import {API} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'SET-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

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
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

export type PageUsersStateType = typeof initialState

const usersReducer = (state: PageUsersStateType = initialState, action: ActionTypes): PageUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}

// ActionCreators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsers = (users: UserDataType[]) => ({type: SET_USERS, users: users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

// ThunkCreators
export const requestUsers = (page: number, pageSize: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        API.usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        API.followAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                    dispatch(toggleFollowingProgress(false, userId))
                }
            })
    }
}
export const unfollow = (userId: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        API.followAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                    dispatch(toggleFollowingProgress(false, userId))
                }
            })
    }
}

export default usersReducer