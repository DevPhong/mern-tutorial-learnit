import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    let navigate = useNavigate();

    useEffect(() => {
        return navigate("/login");
    }, []);

    return (
        <h2></h2>
    )
}

export default Landing