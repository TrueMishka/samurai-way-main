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
        auth() {
            return instance.get(`auth/me`)
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
    followAPI:{
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
    }
}