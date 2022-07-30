import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashBoardPage, TaskPage, MemberPage, CreateTaskPage, CreateMemberPage } from '../pages'

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/Dashboard" element={<DashBoardPage />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/create-member" element={<CreateMemberPage />} />
            <Route path="/create-member/:id" element={<CreateMemberPage />} />
            <Route path="/create-task" element={<CreateTaskPage />} />
            <Route path="/create-task/:id" element={<CreateTaskPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
