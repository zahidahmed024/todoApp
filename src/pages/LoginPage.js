import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/auth';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()


    useEffect(() => {

    }, []);
    return (
        <div>
            <p>username: {JSON.stringify(username)}</p>
            <p>password: {JSON.stringify(password)}</p>
            <input
                value={username || ''}
                onChange={e => setUsername(e.target.value)}
                placeholder='usename'
            />
            <br />
            <input
                value={password || ''}
                onChange={e => setPassword(e.target.value)}
                placeholder='password'
            />
            <br />
            <button onClick={() => {
                // console.log({ username, password })
                dispatch(login({ username, password }))
            }}>login</button>
        </div>
    )
}
