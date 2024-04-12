import {useNavigate} from 'react-router-dom'

function Dashboard(){
    const navigate = useNavigate();
    return (
        <>
            <div className='heading'>Dashboard</div>
            <button onClick={()=>navigate("/add-new-policy")}  variant="contained">Add new Policy</button>
            <div>
                <div className='heading'>
                    Incoming claims
                </div>
            </div>
        </>
    )
}
export default Dashboard