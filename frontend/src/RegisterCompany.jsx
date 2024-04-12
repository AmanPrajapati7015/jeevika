import { useState } from "react"
import { TextField, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom'

function RegisterComapany() {
    const [cName, setCName] = useState("");
    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");
    const [gst, setGST] = useState("");

    const navigate = useNavigate();

    function sendDetails() {
        console.log({ cName, adminID, password, gst });
        navigate("/admin-login")
    }

    return (
        <>
            <div className="background-wrap" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/geometric-shapes-neon-lights-background_23-2148416028.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=ais)", backgroundSize: 'cover' }}>
                <div className="container" >
                    <h1>Register Company form</h1>
                    <div className="crudential" variant="outlined" >
                        <TextField onChange={(e) => setCName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField onChange={(e) => setAdminID(e.target.value)} id="outlined-basic" label="Admin-id" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" />
                        <TextField onChange={(e) => setGST(e.target.value)} id="outlined-basic" label="GST no." variant="outlined" />
                        <Button onClick={sendDetails} variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default RegisterComapany