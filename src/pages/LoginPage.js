import { Button, TextField } from '@mui/material';
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
            <TextField
                value={username || ''}
                onChange={e => setUsername(e.target.value)}
                placeholder='usename'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />
            <br />
            <TextField
                value={password || ''}
                onChange={e => setPassword(e.target.value)}
                placeholder='password'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />
            <br />
            <Button
                color="secondary"
                onClick={() => {
                    dispatch(login({ username, password }))
                }}
                variant="contained">
                login
            </Button>
        </div>
    )
}
