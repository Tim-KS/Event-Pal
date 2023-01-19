import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

export default function Event() {
    // Load Event Data
    const [event, setEvent] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const getEvent = async () => {
        const response = await fetch(`http://localhost:3001/events/${userId}/events`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        setEvent(data);
    };

    const createEvent = async () => {
        console.log("Creating event.")
        const response = await fetch(`http://localhost:3001/events/${userId}/events`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: {
                userId: userId,
                description: "Christmas Celebration 2023",
                picturePath: "http://localhost:3001/assets/event1.jpg"
            }
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        setEvent(data);
    };

    useEffect(() => {
        getEvent();
        createEvent();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!event) return null;

  return (
    <>
    <Card sx={{ maxWidth: 345 }} styles={{marginTop: 100, paddingTop: 10}}>
      <CardMedia
        sx={{ height: 140 }}
        image="http://localhost:3001/assets/event1.jpg"
        title="Lollapolluza"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lollapolluza
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Some really long random description
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Location: New York, CA
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br />
    <Card sx={{ maxWidth: 345 }} styles={{marginTop: 100, paddingTop: 10}}>
      <CardMedia
        sx={{ height: 140 }}
        image="http://localhost:3001/assets/event2.jpg"
        title="Lollapolluza"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Swan Opera
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Some really long random description
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Location: Sydney, NSW
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    {/* <Button variant="contained" onSubmit={() => {
        console.log("Button clicked");
        createEvent();
    }} >CREATE</Button> */}
    </>
  );
}