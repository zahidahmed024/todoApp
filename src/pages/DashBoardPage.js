import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

export default function DashBoardPage() {
    const user = useSelector((state) => state.auth.loggedInUser);

    return (
        <Layout>
            <div>DashBoardPage {JSON.stringify(user)}</div>
        </Layout>
    )
}
