import React from 'react'
import { NavBar, Footer } from '../components';
export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
