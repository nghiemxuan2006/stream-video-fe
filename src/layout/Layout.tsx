import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const Layout = () => {
    return (
        <div className="page h-creen w-full">
            <SideBar />
            <div className="content bg-[#191817]">
                <div className="header">
                    <Header />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout