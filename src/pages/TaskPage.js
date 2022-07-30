import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Layout, CommonButton, RenderTaskItem } from '../components'
import { appRoutes, strings } from '../constants';
import { deleteTask } from '../store/actions/task';

export default function TaskPage() {
    const navigate = useNavigate()
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm(strings.are_you_sure_you_want_to_delete)) {
            dispatch(deleteTask(id))
        } else {
        }
    }
    const navigateToTaskPage = (id) => {
        navigate(`${appRoutes.create_task}/${id}`)
    }
    return (
        <Layout>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '80vh',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
            }}>
                <CommonButton
                    text={strings.create_task}
                    color="secondary"
                    onClick={() => navigate(appRoutes.create_task)}
                    variant="contained"
                />

                {
                    tasks.map((task, index) => {
                        return <RenderTaskItem
                            key={task.id}
                            title={task.title}
                            createdAt={task.createdAt}
                            description={task.description}
                            assignTo={task.assignTo?.name || 'no assign'}
                            onClickEdit={() => navigateToTaskPage(task.id)}
                            onClickDelete={() => handleDelete(task.id)}
                        />
                    })
                }
            </div>
        </Layout>
    )
}

