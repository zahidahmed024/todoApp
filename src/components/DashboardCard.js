import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { strings } from '../constants'

export default function DashBoardCard({ title, onClick }) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', width: '250px', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} size="small">{strings.check}</Button>
            </CardActions>
        </Card>
    )
}
