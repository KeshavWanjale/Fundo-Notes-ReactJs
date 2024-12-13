import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ Component }) => {
    const navigate = useNavigate()
    const status = localStorage.getItem('accessToken') ? true : false;

    useEffect(() => {
        if (!status) {
            navigate('/login', { replace: true })
        }
    }, [status])

    return status ? <Component /> : <></>
}

export default AuthGuard;