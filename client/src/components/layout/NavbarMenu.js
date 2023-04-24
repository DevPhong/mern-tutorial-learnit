import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Container from 'react-bootstrap/Container';
import logoutIcon from '../../assets/logout.svg'

const NavbarMenu = () => {

    const { authState: { user }, logoutUser } = useContext(AuthContext)

    const logout = () => logoutUser()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='font-weight-bolder text-white'>
                    <img
                        src={learnItLogo}
                        alt='learnItLogo'
                        width='32'
                        height='32'
                        className='mr-2'
                    />
                    LearnIt
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            className='font-weight-bolder text-white'
                            to='/dashboard'
                            as={Link}
                        >
                            Dashboard
                        </Nav.Link>
                        <Nav.Link
                            className='font-weight-bolder text-white'
                            to='/about'
                            as={Link}
                        >
                            About
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='font-weight-bolder text-white' disabled>
                            Welcome {user ? user.username : ''}
                        </Nav.Link>
                        <Button
                            variant='secondary'
                            className='font-weight-bolder text-white'
                            onClick={logout}
                        >
                            <img
                                src={logoutIcon}
                                alt='logoutIcon'
                                width='32'
                                height='32'
                                className='mr-2'
                            />
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarMenu