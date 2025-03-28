import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../ScrollToTop'

function Layout() {
    return (
        <>
            <div className='overflow-x-hidden'>
                <ScrollToTop />
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
export default Layout;