import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CommonButton, Layout, TextInput } from '../components'
import { addMember, updateMember } from '../store/actions/auth';

export default function CreateMemberPage() {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const members = useSelector((state) => state.auth.members);

    const navigate = useNavigate();

    let { id } = useParams();


    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            let member = members.find((item) => item.id === id)
            console.log('member', member)
            setUserId(id)
            setName(member.name)
            setEmail(member.email)
        }
    }, []);


    const handleSubmit = () => {
        if (!name || !email) {
            alert('please fill all fields')
            return false
        }
        if (userId) {
            dispatch(updateMember({ userId, name, email }))
            // some check then navigate to member page will be here
            navigateToTaskPage()
        } else {
            dispatch(addMember({ name, email }))
            // some check then navigate to member page will be here
            navigateToTaskPage()
        }
        setName('');
        setEmail('');
    }
    const navigateToTaskPage = () => {
        navigate('/member')
    }

    return (
        <Layout>
            <div style={{
                display: 'flex',
                height: '80vh',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '80px'
            }}>
                <TextInput
                    value={name || ''}
                    onChange={e => setName(e.target.value)}
                    placeholder='name...'
                    label="name"
                    variant="standard"
                />
                <br />

                <TextInput
                    value={email || ''}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email...'
                    label="email"
                    variant="standard"
                    type='email'
                />
                <br />
                <CommonButton
                    text={userId ? 'Update' : 'Create'}
                    color="secondary"
                    onClick={handleSubmit}
                    variant="contained"
                />
            </div>

        </Layout>
    )
}
