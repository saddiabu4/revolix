import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="h-full">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout 