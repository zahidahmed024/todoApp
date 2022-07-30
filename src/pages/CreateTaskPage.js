import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CommonButton, Layout, TextInput } from '../components';
import Select from 'react-select';
import { addTask, updateTask } from '../store/actions/task';
import { appRoutes, strings } from '../constants';


export default function Task() {
    const [title, setTitle] = useState('');
    const [taskId, setTaskId] = useState('');
    const [description, setDescription] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [assignTo, setAssignTo] = useState({ id: '', name: 'select' });
    const members = useSelector((state) => state.auth.members);
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch()

    let navigate = useNavigate()


    let { id } = useParams();
    useEffect(() => {
        let task = tasks.find((task) => task.id === id)
        if (id) {
            setTaskId(id)
            setTitle(task.title)
            setDescription(task.description)
            setAssignTo(task.assignTo)
            setCreatedAt(task.createdAt)
        }
    }, []);

    const handleSubmit = () => {
        if (!title) {
            alert(strings.please_fill_title)
            return false
        }
        if (taskId) {
            dispatch(updateTask({
                id: taskId,
                title,
                description,
                assignTo,
                createdAt,
            }))
            // some check then navigate to task page
            navigateToTaskPage()
        } else {
            dispatch(addTask({ title, description, assignTo }))
            // some check then navigate to task page
            navigateToTaskPage()
        }
    }

    const navigateToTaskPage = () => {
        navigate(appRoutes.task)
    }

    const formatOptionLabel = ({ name }) => (
        <div style={{ display: "flex", alignItems: 'center', borderBottomWidth: 1 }}>
            <div style={{ marginLeft: "10px", color: "#ccc" }}>
                <h5 style={{ color: 'black' }}>{name}</h5>
            </div>
        </div>
    );

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
                    value={title || ''}
                    onChange={e => setTitle(e.target.value)}
                    placeholder={strings.title + '...'}
                    label={strings.title}
                    variant="standard"
                />
                <br />
                <TextInput
                    value={description || ''}
                    onChange={e => setDescription(e.target.value)}
                    placeholder={strings.description + '...'}
                    label={strings.description}
                    variant="standard"
                />
                <br />
                <div style={{
                    width: '190px',
                    paddingBottom: '10px'
                }}>
                    <Select
                        filterOption={(option, rawInput) => option?.data?.name.toLowerCase().includes(rawInput.toLowerCase())}

                        options={[{ id: '', name: 'none' }, ...members]}
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

                <CommonButton
                    text={taskId ? strings.update : strings.create}
                    style={{ textTransform: 'none' }}
                    color="secondary"
                    autoCapitalize={false}
                    onClick={handleSubmit}
                    variant="contained"
                />
            </div>
        </Layout >
    )
}
