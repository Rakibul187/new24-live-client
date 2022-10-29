import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle("Register")
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, photoURL)
                console.log(user)
                form.reset()
                setError('')
                handleEmailVarification()
                toast.success('Please Varify Your Email!')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleChecked = event => {
        setAccepted(event.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleEmailVarification = () => {
        varifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Your Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Your Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={handleChecked}
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <p className='text-danger'>
                {error}
            </p>
        </Form>
    );
};

export default Register;