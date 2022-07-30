import { Button } from '@mui/material'
import React from 'react'

export default function CommonButton({ text = '', onClick = null, color = 'secondary', variant = 'contained' }) {
    return (
        <Button
            color={color}
            onClick={onClick}
            variant={variant}
        >
            {text}
        </Button>
    )
}


