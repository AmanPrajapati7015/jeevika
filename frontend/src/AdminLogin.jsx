import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { TextField, Button } from '@mui/material/';


function AdminLogin() {

    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function login() {
        console.log({ adminID, password });
        navigate('/dashboard');
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