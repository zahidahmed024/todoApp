import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { appRoutes } from '../constants'
import { DashBoardPage, TaskPage, MemberPage, CreateTaskPage, CreateMemberPage } from '../pages'

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path={appRoutes.dashboard} element={<DashBoardPage />} />
            <Route path={appRoutes.task} element={<TaskPage />} />
            <Route path={appRoutes.member} element={<MemberPage />} />
            <Route path={appRoutes.create_member} element={<CreateMemberPage />} />
            <Route path={appRoutes.create_member_with_id} element={<CreateMemberPage />} />
            <Route path={appRoutes.create_task} element={<CreateTaskPage />} />
            <Route path={appRoutes.create_task_with_id} element={<CreateTaskPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
