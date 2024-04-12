import {useNavigate} from 'react-router-dom'

function Dashboard(){
    const navigate = useNavigate();
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={()=>navigate("/add-new-policy")}>Add new Policy</button>
            <div>
                <h2>
                    Incoming claims
                </h2>
            </div>
        </>
    )
}
export default Dashboard