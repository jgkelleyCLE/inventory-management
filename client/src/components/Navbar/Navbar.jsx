"use client"
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/redux/globalSlice'
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch()
    const isSidebarCollapsed = useSelector(state => state.global.isSidebarCollapsed)
    const isDarkMode = useSelector(state => state.global.isDarkMode)
    const { updateLocalStorage } = useLocalStorage()

    const toggleSidebar = () => {
    
            dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
            updateLocalStorage('isSidebarCollapsed', !isSidebarCollapsed)
        }

        const toggleDarkMode = () => {

            dispatch(setIsDarkMode(!isDarkMode))
            updateLocalStorage('isDarkMode', !isDarkMode)
        }

  return (
    <div className="flex items-center justify-between w-full mb-7">
        {/* LEFT SIDE */}
        <div className="flex justify-between items-center gap-5">
            <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 transition duration-200" onClick={()=> toggleSidebar()}>
                <Menu className="w-4 h-4" />
            </button>
        </div>
        <div className="relative">
            <input type="search" placeholder="Search groups and products" className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-100" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Bell className="w-4 h-4 text-gray-500" />
            </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 justify-between">
            <div className="hidden md:flex items-center justify-between gap-5">
                <div>
                    
                    <button onClick={()=> toggleDarkMode()}>
                    {
                        isDarkMode ? <Sun className="cursor-pointer text-gray-500" size={24} /> : <Moon className="cursor-pointer text-gray-500" size={24} />
                    }
                    </button>
                </div>
                {/* <div className="relative">
                    <Bell className="cursor-pointer text-gray-500" size={24} />
                </div> */}
                <Link href="/settings">
                    <Settings className="cursor-pointer text-gray-500" size={24} />
                </Link>
            </div>
                
                   
        </div>
    </div>
  )
}

export default Navbar