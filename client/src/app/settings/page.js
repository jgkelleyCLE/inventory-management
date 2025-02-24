"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Settings = () => {

    const darkMode = useSelector(state => state.global.isDarkMode)

    console.log("DARK MODE?: ", darkMode)

  return (
    <div>Settings</div>
  )
}

export default Settings