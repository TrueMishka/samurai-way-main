import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8014b026-2d5d-4013-8837-120f27334da7'
    }
})

export const API = {
    authAPI: {
        me() {
            return instance.get(`auth/me`)
                .then(res => {
                    return res.data
                })
        },
        login(email: string, password: string, rememberMe: boolean = false) {
            return instance.post(`auth/login`,  {email, password, rememberMe})
                .then(res => {
                    return res.data
                })
        },
        logout(){
            return instance.delete(`auth/login`)
                .then(res => {
                    return res.data
                })
        }
    },
    usersAPI: {
        getUsers(currentPage: number = 1, pageSize: number = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(res => {
                    return res.data
                })
        }
    },
    followAPI: {
        follow(userId: number) {
            return instance.post(`follow/${userId}`)
                .then(res => {
                    return res.data
                })
        },
        unfollow(userId: number) {
            return instance.delete(`follow/${userId}`)
                .then(res => {
                    return res.data
                })
        }
    },
    profileAPI: {
        getProfile(userId: number) {
            return instance.get(`profile/${userId}`)
                .then(res => {
                    return res.data
                })
        },
        getStatus(userId: number) {
            return instance.get(`profile/status/${userId}`)
                .then(res => {
                    return res.data
                })
        },
        updateStatus(status: string) {
            return instance.put(`profile/status`, {status: status})
                .then(res => {
                    return res.data
                })
        }
    }
}