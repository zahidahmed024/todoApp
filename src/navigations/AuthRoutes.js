import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoardPage } from '../pages'

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardPage />} />
        </Routes>
    )
}
