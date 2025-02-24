'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'

export function LocalStorageProvider({ children }) {
    const { isLoading } = useLocalStorage()

    if (isLoading) {
        return null // or a loading spinner
    }

    return children
}