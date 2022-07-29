import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components'
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function MemberPage() {
    const members = useSelector((state) => state.auth.members);
    const tasks = useSelector((state) => state.task.tasks);

    let navigate = useNavigate()

    const handleEdit = useCallback((id) => {
        alert(id)
        // navigate(`/member/${id}`)
    }, [])
    const handleDelete = useCallback((id) => {
        // navigate(`/member/${id}`)
    }, [])
    return (
        <Layout>
            {/* <h4>members: {JSON.stringify(members)}</h4> */}
            {/* <h4>tasks: {JSON.stringify(tasks)}</h4> */}
            <Button
                color="secondary"
                onClick={() => {
                    // alert('MemberPage')/
                    navigate('/create-member')
                }}
                variant="contained">
                add member
            </Button>
            <div>
                {
                    members.map((member, index) => {
                        return (
                            <div key={member.id}>
                                <RenderItem
                                    name={member.name}
                                    taskCount={(tasks.filter((task) => task.assignTo?.id === member.id)).length}
                                    onClickEdit={() => handleEdit(member.id)}
                                    onClickDelete={() => { alert(JSON.stringify(member.id)) }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

function RenderItem({ name, taskCount, onClickEdit, onClickDelete }) {
    return (
        <div style={{
            width: '50%',
        }}>
            <ListItem>
                <ListItemText
                    primary={name}
                    secondary={`number of tasks : ${taskCount || 0}`}
                    
                />
                <IconButton onClick={onClickEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon onClick={onClickDelete} />
                </IconButton>
            </ListItem>
            <Divider />
        </div>
    )
}
