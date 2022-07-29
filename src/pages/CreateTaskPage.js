import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components';
import Select from 'react-select';
import { addTask } from '../store/actions/task';
import { Button, FormControl, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Task() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignTo, setAssignTo] = useState({ id: "", name: 'select' });
    const members = useSelector((state) => state.auth.members);
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const formatOptionLabel = ({ name }) => (
        <div style={{ display: "flex", }}>
            <div style={{ marginLeft: "10px", color: "#ccc" }}>
                {name}
            </div>
        </div>
    );

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        console.log(event.target);
        setAge(event.target.value);
    };

    return (
        <Layout>
            <div>members : {JSON.stringify(members)}</div>
            {/* <div>tasks : {JSON.stringify(tasks)}</div> */}
            {/* <p>halsodoasod</p> */}

            <p>date now: {(new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")}</p>
            <p>name: {title}</p>
            <p>description: {description}</p>
            <p>assignTo: {JSON.stringify(assignTo)}</p>
            <TextField
                value={title || ''}
                onChange={e => setTitle(e.target.value)}
                placeholder='title...'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />
            <br />
            <TextField
                value={description || ''}
                onChange={e => setDescription(e.target.value)}
                placeholder='description...'
                label="Standard warning"
                variant="standard"
                // color="warning"
                focused
            />

            <br />
            <div style={{
                width: '120px',
            }}>
                <Select
                    options={members}
                    value={assignTo}
                    defaultValue={assignTo}
                    styles={{
                        option: (provided, state) => ({
                            backgroundColor: 'white',
                        }),


                    }}

                    formatOptionLabel={formatOptionLabel}
                    onChange={value => setAssignTo(value)}
                />
            </div>
            {/* <button onClick={() => {

                // console.log({ username, password })
                dispatch(addTask({ title, description, assignTo }))
            }}>add</button> */}
            <Button
                style={{ textTransform: 'none' }}
                color="secondary"
                autoCapitalize={false}
                onClick={() => dispatch(addTask({ title, description, assignTo }))}
                variant="contained">
                create
            </Button>
        </Layout >
    )
}
