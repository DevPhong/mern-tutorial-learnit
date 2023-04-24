import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useSnackbar } from 'notistack';

const LoginForm = () => {
    // Context
    const { loginUser } = useContext(AuthContext)
    const { enqueueSnackbar } = useSnackbar();

    //Router
    // const navigate = useNavigate()

    // Local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const { username, password } = loginForm

    const handleChangeLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (!loginData.success) {
                enqueueSnackbar(loginData.message, { variant: 'error' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form className='my-4' onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={handleChangeLoginForm} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={handleChangeLoginForm} />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p>Don't have account
                <Link to='/register'>
                    <Button variant='info' size='sm' className='ml-2'>Register</Button>
                </Link>
            </p>
        </>
    )
}

export default LoginForm