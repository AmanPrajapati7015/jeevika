import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { TextField, Button } from '@mui/material/';

function AddPolicy(){
    const navigate = useNavigate();

    const [state, setState] = useState({});
    
    function setPolicy(e){
        let curState  = {...state};
        curState.PolicyNo = e.target.value;
        setState(curState);
    }
    function setName(e){
        let curState = {...state};
        curState.Name = e.target.value;
        setState(curState);
    }

    function submit(){
        console.log(state);
    }

    return(
        <>
            <div className="background-wrap">
                <div className="container">
                    <h1>Add new Details </h1>
                    <div className="crudential" variant="outlined" >
                        <TextField onChange={setPolicy} id="outlined-basic" label="Admin-id" variant="outlined" />
                        <TextField onChange={setName} id="outlined-basic" type="password" label="Password" variant="outlined" />
                        <Button onClick={submit} variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddPolicy

