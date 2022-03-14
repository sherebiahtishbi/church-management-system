import { Card, CardMedia, CardContent, Typography, CardActions, Grid} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import churchImage1 from '../images/church1.jpg'
import churchImage2 from '../images/church2.jpg'
import churchImage3 from '../images/church3.jpg'
import churchImage4 from '../images/church4.jpg'
import churchImage5 from '../images/church5.jpg'

const churches = [
  {
    id:1,
    image:churchImage1,
    name:"Maninagar Methodist Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:2,
    image:churchImage2,
    name:"Anand CNI Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:3,
    image:churchImage3,
    name:"Grace Community Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:4,
    image:churchImage4,
    name:"Shalom Ministries",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:5,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:6,
    image:churchImage4,
    name:"Shalom Ministries",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:7,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:8,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:9,
    image:churchImage4,
    name:"Shalom Ministries",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:10,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
    },
  {
    id:11,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:12,
    image:churchImage4,
    name:"Shalom Ministries",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  },
  {
    id:13,
    image:churchImage5,
    name:"Baroda Centenary Church",
    description:"The Methodist Church, located in Maninagar, Gujarat was established in 1972 and functions on the belief that accepting Lord Jesus as your savior and committing your life to serve Him and His ideals is the path to true salvation."
  }
]


const Churches = () => {
    return (
        <>
    <Grid container spacing={2} sx={{mt:8}}>
            {
                churches.map((church) => { 
                    return (
                        <Grid item xs={12} md={4} xl={3} key={church.id}>
                            <Card sx={{ p: 1, m: 1 }} raised>
                                <CardMedia
                                    component="img"
                                    alt={church.name}
                                    height="160"
                                    image={church.image}
                                    // image={churchImage1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {church.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {church.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        style={{ display: "block", margin: "1rem 0" }}
                                        // to={`/churches/${church.id}`}
                                        to={`/church`}
                                        key={church.id}
                                    >
                                        View Details
                                    </Link>                                    
                                    {/* <Button size="small">Manage</Button>
                                    <Button size="small">View Details</Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>
            {/* <Outlet /> */}
        </>
  );
};

export default Churches;
