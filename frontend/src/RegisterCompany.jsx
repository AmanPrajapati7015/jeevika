import { useState } from "react"
import { TextField, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function RegisterComapany() {
    const [cName, setCName] = useState("");
    const [adminID, setAdminID] = useState("");
    const [password, setPassword] = useState("");
    const [gst, setGST] = useState("");

    const navigate = useNavigate();

    function sendDetails() {
        const details = { cName, adminID, password, gst }

        axios.post('/api/company-register', details)
            .then(response => {
                console.log('Response:', response.data);
                navigate("/admin-login")
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="background-wrap" style={{ backgroundImage: "url(./logo.svg)", backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center' }}> 
   
                <div className="container" >
                    <div className='heading'>Register Company form</div>
                    <div className="crudential" variant="outlined" >
                        <TextField onChange={(e) => setCName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField onChange={(e) => setAdminID(e.target.value)} id="outlined-basic" label="Admin_id" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" />
                        <TextField onChange={(e) => setGST(e.target.value)} id="outlined-basic" label="GST number" variant="outlined" />
                        <Button  onClick={sendDetails} id="submit" variant="contained">Submit</Button>
                    </div>
                </div>

        </div>
    )
}



export default RegisterComapany