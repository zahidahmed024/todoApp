import React from 'react'
import { useSelector } from 'react-redux';

export default function DashBoardPage() {
    const user = useSelector((state) => state.auth.loggedInUser);

    return (
        <div>DashBoardPage {JSON.stringify(user)}</div>
    )
}
