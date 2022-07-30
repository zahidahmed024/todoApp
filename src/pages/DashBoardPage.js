import { Box } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DashboardCard } from '../components';
import Layout from '../components/Layout';
import { appRoutes, strings } from '../constants';

export default function DashBoardPage() {
    const navigate = useNavigate();
    return (
        <Layout>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <div style={{
                    marginTop: '10vh',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                    <DashboardCard
                        title={strings.members}
                        onClick={() => navigate(appRoutes.member)}
                    />
                    <DashboardCard
                        title={strings.tasks}
                        onClick={() => navigate(appRoutes.task)}
                    />
                </div>
            </Box>
        </Layout>
    )
}

