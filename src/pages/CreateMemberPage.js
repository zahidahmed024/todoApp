import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Layout } from '../components'
import { addMember, updateMember } from '../store/actions/auth';

export default function CreateMemberPage() {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const members = useSelector((state) => state.auth.members);


    let { id } = useParams();


    const dispatch = useDispatch()
    useEffect(() => {
        // console.log('id', id)
        // console.log('member', members.find((item) => item.id == id))
        if (id) {
            let member = members.find((item) => item.id === id)
            setUserId(id)
            setName(member.name)
            setEmail(member.email)
        }
    }, []);


    const handleSubmit = () => {
        if (userId) {
            dispatch(updateMember({ userId, name, email }))
        } else {
            dispatch(addMember({ name, email }))
        }
        setName('');
        setEmail('');
    }

    return (
        <Layout>
            <p>members: {JSON.stringify(members.find((item) => item.id == id))}</p>
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
                onClick={handleSubmit}
                variant="contained">
                add
            </Button>
        </Layout>
    )
}
