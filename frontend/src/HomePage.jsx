import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material/';

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
        <div className="wrapper" style={{backgroundImage:"url(https://img.freepik.com/premium-photo/health-insurance-concept-reduce-medical-expenses-hand-flip-wood-cube-with-icon-healthcare-medical-coin-wood-background-copy-space_52701-34.jpg)", backgroundSize:'cover' , height:"100vh"}} >
            <div className="text" style={{position:"relative", top:'250px', left:'200px', width:'600px'}}>
                <img src="logo.png" height="150px"/>
                <div className="btns" style={{display:"flex", gap:'20px', marginTop:"100px"}}>
                    <Button size='large' style={{color:"#0d1d45", borderColor:"#0d1d45"}} variant="outlined"  onClick={() => navigate("/claim-form")}>Claim Your Insurence</Button>
                    <Button size='large' style={{color:"#0d1d45", borderColor:"#0d1d45" }} variant="outlined" onClick={() => navigate("/company-register")}>Resister your company</Button>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomePage