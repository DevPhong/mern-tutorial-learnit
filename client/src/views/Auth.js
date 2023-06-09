import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const Auth = ({ authRoute }) => {

    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>LearnIt</h1>
                    <h4>Keep track of what you are learning </h4>
                    {authLoading ?
                        <>
                            <div className="d-flex justify-content-center mt-2">
                                <Spinner animation="border" variant="info"></Spinner>
                            </div>
                        </>
                        : isAuthenticated ? <Navigate to='/dashboard'></Navigate> :
                            <>
                                {authRoute === 'login' && <LoginForm />}
                                {authRoute === 'register' && <RegisterForm />}
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth