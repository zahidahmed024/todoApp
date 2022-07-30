import React from 'react'
import { Divider, IconButton, ListItem, ListItemText, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RenderItem({ title = '', createdAt = '', description = '', assignTo, onClickEdit, onClickDelete }) {
    return (
        <div style={{
            width: '50%',
        }}>
            <ListItem style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Typography variant='h6'>{title}</Typography>
                    <Typography>{`assigned to : ${assignTo == 'select' ? 'none' : assignTo}`}</Typography>
                    <Typography>{`description : ${description}`}</Typography>
                    <Typography>{`created at : ${createdAt} `}</Typography>
                </div>

                <div>
                    <IconButton onClick={onClickEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon onClick={onClickDelete} />
                    </IconButton>
                </div>
            </ListItem>
            <Divider />
        </div>
    )
}