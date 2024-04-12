import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    function signOut(){
        localStorage.removeItem("token");
        setUser("");
        navigate("/");
    }

    return(<>
    <div className="navbar">
        <nav>
            hehe
        </nav>
    </div>        
 
    </>)
}

export default Navbar;