// 'use client'

// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { setIsDarkMode, setIsSidebarCollapsed } from '@/redux/globalSlice'

// export const useLocalStorage = () => {
//     const dispatch = useDispatch()

//     useEffect(() => {
//         // Load initial values from localStorage
//         const darkMode = JSON.parse(localStorage.getItem('isDarkMode'))
//         const sidebarCollapsed = JSON.parse(localStorage.getItem('isSidebarCollapsed'))
        
//         if (darkMode !== null) dispatch(setIsDarkMode(darkMode))
//         if (sidebarCollapsed !== null) dispatch(setIsSidebarCollapsed(sidebarCollapsed))
//     }, [])

//     const updateLocalStorage = (key, value) => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }

//     return { updateLocalStorage }
// }

'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/redux/globalSlice'

export const useLocalStorage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Load initial values from localStorage
        try {
            const darkMode = JSON.parse(localStorage.getItem('isDarkMode'))
            const sidebarCollapsed = JSON.parse(localStorage.getItem('isSidebarCollapsed'))
            
            if (darkMode !== null) dispatch(setIsDarkMode(darkMode))
            if (sidebarCollapsed !== null) dispatch(setIsSidebarCollapsed(sidebarCollapsed))
        } catch (error) {
            console.error('Error loading from localStorage:', error)
        } finally {
            setIsLoading(false)
        }
    }, [dispatch])

    const updateLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    return { updateLocalStorage, isLoading }
}