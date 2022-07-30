import { TextField } from '@mui/material'
import React from 'react'

export default function TextInput({ label = '', value = '', onChange = null, type = '', placeholder = '', }) {
    return (
        <TextField
            type={type || 'text'}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            label={label}
            variant="outlined"
            focused
        />
    )
}
