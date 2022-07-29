import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavBar } from '../components';
export default function Layout({ children }) {
    return (
        <div className='flex-1 flex-col'>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}
