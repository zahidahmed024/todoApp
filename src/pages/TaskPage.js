import { Button, Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTask } from '../store/actions/task';

export default function TaskPage() {
    const navigate = useNavigate()
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteTask(id))
        } else {
        }
    }
    return (
        <Layout>
            <h3 onClick={() => navigate('/create-task')}>{JSON.stringify(tasks)}</h3>
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
                        onClickEdit={() => navigate(`/create-task/${task.id}`)}
                        onClickDelete={() => handleDelete(task.id)}
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