import { AccountBalance, Article, AttachMoney, Event, Group, Person } from '@mui/icons-material';
import { Grid, Typography, Box, List  } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GraceMenuItem from '../components/common/GraceMenuItem';

const Church = () => {
    let navigate = useNavigate()

    return (
        <Box sx={{flexGrow:1, mt:12, borderRadius:2}}>
            <Grid container spacing={0.25} sx={{ minHeight:'100vh'}}>
                <Grid item xs={12} sm={12} md={4} lg={2} sx={{ height: '100%' }}>
                    <Box sx={{bgcolor:'background.paper',flexGrow:1, boxShadow:4, height:500, m:5, borderRadius:2, px:1}}>
                        <Typography variant="h6" pl={3} pt={3} sx={{ color: 'GrayText' }}>Church</Typography>
                        <List>
                            <GraceMenuItem icon={<Person />} text="Pastor" onclick={()=>{navigate('/church/pastor')}} />
                            <GraceMenuItem icon={<Group />} text="Members" onclick={() => { navigate('/church/members') }} />
                            <GraceMenuItem icon={<Event/>} text="Events" onclick={()=>{navigate('/church/events')}} />
                            <GraceMenuItem icon={<AttachMoney />} text="Donation" onclick={()=>{navigate('/church/donations')}} />
                            <GraceMenuItem icon={<Article />} text="Documents" onclick={() => { navigate('/church/documents') }} />
                            <GraceMenuItem icon={<AccountBalance/>} text="Facilities" onclick={()=>{navigate('/church/facilities')}} />
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={10}>
                    <Box sx={{bgcolor:'background.paper',flexGrow:1, boxShadow:4, m:5, borderRadius:2, p:3}}>
                        <Outlet/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Church;
