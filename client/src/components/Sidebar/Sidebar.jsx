"use client"
import { setIsSidebarCollapsed } from '@/redux/globalSlice'
import { Archive, CircleDollarSign, Clipboard, Icon, Layout, Menu, SlidersHorizontal, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SidebarLink = ({ href, icon: Icon, label, isCollapsed}) => {

    const pathname = usePathname()
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard")

    return (
        <Link href={href}>
            <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} gap-3 text-gray-700 py-3 px-5 hover:text-blue-500 hover:bg-blue-100 transition duration-200 ${isActive ? "bg-blue-200 text-white" : ""}`}>
               
                <Icon className="w-6 h-6 text-gray-700" />
                
                <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>{label}</span>

            </div>
        </Link>
    )
}

const Sidebar = () => {

    const dispatch = useDispatch()
    const isSidebarCollapsed = useSelector(state => state.global.isSidebarCollapsed)

    const toggleSidebar = () => {

        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))

    }

    const sidebarClassnames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} h-full overflow-hidden shadow-md z-40 bg-white text-gray-900 transition-all duration-300 ease-in-out`

  return (
    <div className={sidebarClassnames}>
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-9"}`}>
            <div className={`${isSidebarCollapsed ? "flex items-center justify-center" : null}`}>Logo</div>
            <h1 className={` ${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>TentStock</h1>
        
        <button className="md:hidden px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300" onClick={()=> toggleSidebar()}>
            <Menu className="w-4 h-4" />
        </button>
        </div>

        {/* LINKS */}
        <div className="flex-grow mt-8">
            <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollapsed={isSidebarCollapsed} />
        </div>

        {/* FOOTER */}
        <div className={`absolute bottom-5 w-full ${isSidebarCollapsed ? "hidden" : "block"}`}>
            <p className="text-center">&copy; 2025 Tentlify</p>

        </div>

    </div>
  )
}

export default Sidebar