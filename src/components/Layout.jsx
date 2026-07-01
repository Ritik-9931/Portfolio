import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <header>
            <Header />
        </header>

        <main className='m-0'>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout