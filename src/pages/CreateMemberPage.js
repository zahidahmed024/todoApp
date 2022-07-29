import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Layout } from '../components'
import { addMember } from '../store/actions/auth';

export default function CreateMemberPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch()

    return (
        <Layout>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <TextField
                value={name || ''}
                onChange={e => setName(e.target.value)}
                placeholder='name...'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />
            <br />

            <TextField
                value={email || ''}
                onChange={e => setEmail(e.target.value)}
                placeholder='email...'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />
            <br />

            <Button
                color="secondary"
                onClick={() => {
                    setName('');
                    setEmail('');
                    dispatch(addMember({ name, email }))
                }}
                variant="contained">
                add
            </Button>
        </Layout>
    )
}
