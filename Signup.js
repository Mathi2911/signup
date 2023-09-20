import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import axios from 'axios'

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost3001/register', { firstName, lastName, address, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    };

    return (
        <Typography component="div" sx={{ maxWidth: "500px", margin: "15px", margin: "auto", paddingTop: "20px" }}>
            <Typography variant="h4">Signup</Typography>
            <Typography component="form" sx={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                <TextField
                    sx={{ marginTop: "20px" }}
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value)}

                />
                <TextField
                    sx={{ marginTop: "20px" }}
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    sx={{ marginTop: "20px" }}
                    label="Address"
                    name="address"
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                    sx={{ marginTop: "20px" }}
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    sx={{ marginTop: "20px" }}
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    sx={{ float: "right", marginTop: "20px"}}
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="primary"
                >
                    Sign UP
                </Button>
            </Typography>
        </Typography>
    );
}

export default Signup;
