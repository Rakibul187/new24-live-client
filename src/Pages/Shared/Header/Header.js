import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('sigOut error: ', error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light mb-4 py-3">
                <Container>
                    <Navbar.Brand><Link to='/'>News24Live</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Categories</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex justify-content-center  align-items-center'>
                            <Nav href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span className='mt-2'> {user?.displayName}</span>
                                            <Button className='ms-2 border text-primary' onClick={logOutHandler} variant="light" >Logout</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='me-2' to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }


                            </Nav>
                            <Link to="/profile">
                                {user?.uid ?
                                    <img style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '15px'
                                    }} src={user.photoURL} alt='' /> :
                                    <FaUserAstronaut></FaUserAstronaut>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                            <RightSideNav></RightSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;