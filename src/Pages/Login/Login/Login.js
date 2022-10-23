import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')

    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSingIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    return (
        <Form onSubmit={handleSingIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="login">
                Login
            </Button>
            <p className='text-danger block'>
                {error}
            </p>
        </Form>
    );
};

export default Login;