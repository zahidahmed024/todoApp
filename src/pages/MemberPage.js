import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CommonButton, Layout, RenderMemberItem } from '../components'
import { appRoutes, strings } from '../constants';
import { deleteMember } from '../store/actions/auth';
export default function MemberPage() {
    const members = useSelector((state) => state.auth.members);
    const tasks = useSelector((state) => state.task.tasks);

    const dispatch = useDispatch()

    let navigate = useNavigate()

    const handleEdit = (id) => {
        navigate(`${appRoutes.create_member}/${id}`)
    }
    const handleDelete = useCallback((id) => {
        if (window.confirm(strings.are_you_sure_you_want_to_delete)) {
            dispatch(deleteMember(id))
        } else {
        }
    }, [])
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
                    text={strings.create_member}
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                        navigate(appRoutes.create_member)
                    }}
                />
                {
                    members.map((member) => {
                        return (
                            <RenderMemberItem
                                key={member.id}
                                name={member.name}
                                taskCount={(tasks.filter((task) => task.assignTo?.id === member.id)).length}
                                onClickTitle={() => handleEdit(member.id)}
                                onClickEdit={() => handleEdit(member.id)}
                                onClickDelete={() => handleDelete(member.id)}
                            />
                        )
                    })
                }
            </div>
        </Layout>
    )
}


