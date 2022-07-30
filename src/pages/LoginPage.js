import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CommonButton, TextInput } from '../components';
import { strings } from '../constants';
import { login } from '../store/actions/auth';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()


    const handleLogin = () => {
        if (username && password) {
            dispatch(login({ username, password }))
        }
        else {
            alert(strings.please_fill_all_fields)
        }
    }
    return (
        <div style={{
            display: 'flex',
            height: '80vh',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant='h4' sx={{ marginBottom: 3 }}> {strings.login} </Typography>
            <TextInput
                value={username || ''}
                onChange={e => setUsername(e.target.value)}
                placeholder={strings.username}
                label={strings.username}
                variant="outlined"
            />
            <br />
            <TextInput
                value={password || ''}
                onChange={e => setPassword(e.target.value)}
                placeholder={strings.password}
                label={strings.password}
                variant="outlined"
                type='password'
            />
            <br />
            <CommonButton
                onClick={handleLogin}
                variant="contained"
                text={strings.login}
            />
        </div>
    )
}
