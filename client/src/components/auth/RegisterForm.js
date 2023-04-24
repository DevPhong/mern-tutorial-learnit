import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useSnackbar } from 'notistack';

const RegisterForm = () => {

    // Context
    const { registerUser } = useContext(AuthContext)
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    // Local state
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const { username, password, confirmPassword } = registerForm

    const handleChangeRegisterForm = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            enqueueSnackbar('Password do not match', { variant: 'error' })
            return
        }

        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                enqueueSnackbar(registerData.message, { variant: 'error' })
                return
            } else {
                enqueueSnackbar("Register successfully!!!", { variant: 'success' })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form className='my-4' onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={handleChangeRegisterForm}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={handleChangeRegisterForm}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        required
                        value={confirmPassword}
                        onChange={handleChangeRegisterForm}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant='success' type='submit'>Register</Button>
            </Form>
            <p>Already have an account?
                <Link to='/login'>
                    <Button variant='info' size='sm' className='ml-2'>Login</Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm