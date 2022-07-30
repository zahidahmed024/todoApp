import { Divider, IconButton, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function RenderItem({ name, taskCount, onClickTitle, onClickEdit, onClickDelete }) {
    return (
        <div style={{
            width: '70%',
            // backgroundColor: 'grey',
        }}>
            <ListItem >
                <ListItemText
                    onClick={onClickTitle}
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