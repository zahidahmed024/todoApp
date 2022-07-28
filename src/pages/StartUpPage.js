import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthRoutes, GuestRoutes } from '../navigations'

export default function StartUpPage() {

    let user = useSelector((state) => state.auth.loggedInUser);
    let isloggedIn = user && user.token;

    return (
        <Router>
            {
                isloggedIn ? <AuthRoutes /> : <GuestRoutes />
            }
        </Router>
    )
}
