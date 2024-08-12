import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@/features/userCard/userSlice"

export interface User {
    user: {
        users: {
            name: {
                first: string
                last: string
            }
            location: {
                city: string
                country: string
            }
            picture: {
                large: string
            }
        }[]
    }
}

export interface Product {}

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})
