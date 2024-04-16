import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TextField, Button, useEventCallback } from '@mui/material/';

import axios from 'axios'

function AddPolicy({user}) {
    const navigate = useNavigate();

    const [state, setState] = useState({});

    function handleChange(event, field) {
        setState(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    }
    

    function setPhoto(e){
        setState(prevState=>({
            ...prevState,
            "photo":e.target.files[0]
        }))
    }

    function setSignature(e){
        setState(prevState=>({
            ...prevState,
            "signature":e.target.files[0]
        }))
    }

    function submit() {
        const formData = new FormData();
        console.log(user);

        Object.keys(state).forEach((key) => {
            formData.append(key, state[key]);
        });
        formData.append("cName", user.cName);
    
        axios.post('/api/add-policy', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: "Bearer " + localStorage.getItem("token") 
            }
        })
        .then(response => {
            console.log('Success:', response.data);
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
                    <h1>Add new Policy Details </h1>
                    <div className='grid'>
                        <div className="crudential" variant="outlined" >
                            <TextField onChange={(e) => handleChange(e, "PolicyNo")} id="outlined-basic" type='number' label="Policy no" size='small' required variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "Name")} id="outlined-basic" size='small' required label="Name" variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "Address")} id="outlined-basic" label="Address" size='small' required variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "Amount")} id="outlined-basic" type='number' label="Amount" size='small' required variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "DOB")} InputLabelProps={{ shrink: true }} id="outlined-basic" type='date' label="Date of Birth" size='small' required variant="outlined" />
                        </div>
                        <div className="crudential" variant="outlined" >
                            <TextField onChange={(e) => handleChange(e, "NomineeName")} id="outlined-basic" label="Nominee Name" size='small' required variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "Relation")} id="outlined-basic" label='Relation with Nominee' size="small" required  variant="outlined" />
                            <TextField onChange={(e) => handleChange(e, "Aadhar")} id="outlined-basic" label='Aadhar no' type='number' size="small" required  variant="outlined" />
                            <TextField onChange={setPhoto} InputLabelProps={{ shrink: true }} type='file' id="outlined-basic" label="Photo" size='small' variant="outlined" />
                            <TextField onChange={setSignature} InputLabelProps={{ shrink: true }} type='file' id="outlined-basic" label="Signature URL" size='small' variant="outlined" />
                        </div>
                    </div>
                    <br />
                    <Button onClick={submit} variant="contained">Submit</Button>

                </div>
            </div>
        </>
    )
}
export default AddPolicy;
