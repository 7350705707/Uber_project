import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CaptainProtectedWrapper({children}) {
    const token = localStorage.getItem("captainToken");
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate("/captain/login");
        }else{
            navigate("/captain/home");
        }
    }, []);

    return (
        <div>{children}</div>
    )
};