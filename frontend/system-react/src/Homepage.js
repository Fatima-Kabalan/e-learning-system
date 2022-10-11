import React, { useEffect } from 'react'
import { useHistory, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token){
            navigate("/login");
        }
    })

    return (
        <React.Fragment>
            Welcome
        </React.Fragment>
    );
};

export default Homepage
