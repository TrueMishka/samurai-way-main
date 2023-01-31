import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserDataType = {
    id: number
    fullName: string
    followed: boolean
    photoUrl: string
    status: string
    location: {
        country: string
        city: string
    }
}

const initialState = {
    users: [] as UserDataType[]
    /*    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Bob',
            photoUrl: 'https://example.com/source-image.gif',
            status: 'Hello',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Michel',
            photoUrl: 'https://example.com/source-image.gif',
            status: 'Yo',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Denny',
            photoUrl: 'https://example.com/source-image.gif',
            status: 'Its my status',
            location: {country: 'Kiev', city: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Helen',
            photoUrl: 'https://example.com/source-image.gif',
            status: 'Dont know what to write here',
            location: {country: 'Russia', city: 'Moscow'}
        }
    ] as UserDataType[]*/
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true}: u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false}: u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: UserDataType[]) => ({type: SET_USERS, users: users} as const)

export default usersReducer