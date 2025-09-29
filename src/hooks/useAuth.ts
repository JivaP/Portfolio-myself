
import { useState, useEffect } from 'react'
import type { User } from '@/types'
import { ABI_BASE_URL } from '@/lib'

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    console.log(user, "user>>>")
    // Check if user is already logged in from localStorage/session
    const savedUser = localStorage.getItem('user')
    useEffect(() => {

        if (savedUser) {
            setUser(JSON.parse(savedUser))
            setIsAuthenticated(true)
        }
    }, [savedUser])

    // ---- Login ----
    const login = async (email: string, password: string) => {
        try {
            setLoading(true)
            const res = await fetch(`${ABI_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            if (!res.ok) {
                throw new Error("Login failed")
            }

            const data = await res.json()
            console.log(data);
            if (data.token) {

                // Save token + user in localStorage
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))

                setUser(data.user)
                setIsAuthenticated(true)
                window.location.href = '/admin' // Redirect to admin dashboard
            }
        } catch (err) {
            console.error(err)
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }

    // ---- Logout ----
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null)
        setIsAuthenticated(false)
    }

    return {
        user,
        loading,
        isAuthenticated,
        login,
        logout,
    }
}
