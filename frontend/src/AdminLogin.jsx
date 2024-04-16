import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { TextField, Button } from '@mui/material/';
import axios from 'axios';


function AdminLogin({setUser}) {

    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function login() {
        let data = { adminID, password };
        console.log(data);
        axios.post('/api/admin-signin', { adminID, password },)
            .then(response => {
                console.log('Response:', response.data);
                setUser(response.data);
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (

        <>
            <div className="background-wrap">
                <div className="container">
                    <h1>Company Admin Login</h1>
                    <div className="crudential" variant="outlined" >
                        <TextField onChange={(e) => setAdminID(e.target.value)} id="outlined-basic" label="Admin-id" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" />
                        <Button onClick={login} variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin