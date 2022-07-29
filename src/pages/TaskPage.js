import { Button, Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TaskPage() {
    const navigate = useNavigate()
    const tasks = useSelector((state) => state.task.tasks);

    return (
        <Layout>
            {/* <h3 onClick={() => navigate('/create-task')}>create task</h3> */}
            <Button
                color="secondary"
                onClick={() => navigate('/create-task')}
                variant="contained">
                create task
            </Button>
            {
                tasks.map((task, index) => {
                    return <RenderItem
                        key={task.id}
                        title={task.title}
                        createdAt={task.createdAt}
                        assignTo={task.assignTo?.name || 'no assign'}
                        onClickEdit={() => alert(JSON.stringify(task.id))}
                        onClickDelete={() => { alert(JSON.stringify(task.id)) }}
                    />
                })
            }
            {/* <h5>tasks: {JSON.stringify(tasks)} </h5> */}
        </Layout>
    )
}

function RenderItem({ title, createdAt, assignTo, onClickEdit, onClickDelete }) {
    return (
        <div style={{
            width: '50%',
        }}>
            <ListItem>
                <ListItemText
                    primary={title}
                />
                <ListItemText
                    primary={`created at : ${createdAt}`}
                />
                <ListItemText
                    primary={`assign to : ${assignTo}`}
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