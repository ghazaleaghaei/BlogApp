"use client"

import { signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createContext, useReducer, useContext } from "react";

const UserContext = createContext()

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
}

const userReducer = (state, action) => {
    switch (action.type) {
        case "loading": return {
            ...state,
            isLoading: true,
        };
        case "signin": return {
            user: action.payload,
            isAuthenticated: true,
        };
        case "rejected": return {
            ...state,
            isLoading: false,
            error: action.payload,
        };
        case "signup": return {
            usr: action.payload,
            isAuthenticated: true,
        }
    }
}


export default function UserProvider({ children }) {
    const router = useRouter()
    const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(userReducer, initialState)

    async function signin(values) {
        dispatch({ type: "loading" })
        try {
            const { user, message } = await signinApi(values)
            dispatch({ type: "signin", payload: user })
            toast.success(message)
            console.log(user)
            router.push("/profile")
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            dispatch({ type: "rejected", payload: errorMessage })
            toast.error(errorMessage)
        }
    }


    async function signup(values) {
        dispatch({ type: "loading" })
        try {
            const { user, message } = await signupApi(values)
            dispatch({ type: "signup", payload: user })
            toast.success(message)
            console.log(user)
            router.push("/profile")
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            dispatch({ type: "rejected", payload: errorMessage })
            toast.error(errorMessage)
        }
    }

    return <UserContext.Provider value={{ user, isAuthenticated, isLoading, signin, signup }}>
        {children}
    </UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext)
    if (context === undefined) throw new Error("not found User Context");
    return context
}
