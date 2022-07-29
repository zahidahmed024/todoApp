import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoardPage, TaskPage, MemberPage, CreateTaskPage, CreateMemberPage } from '../pages'

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/create-task" element={<CreateTaskPage />} />
            <Route path="/create-member" element={<CreateMemberPage />} />
        </Routes>
    )
}
