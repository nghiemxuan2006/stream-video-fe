import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <div className="page h-creen w-full">
            <SideBar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout