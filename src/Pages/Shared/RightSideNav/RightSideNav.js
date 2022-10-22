import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCaruosel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const provider = new GoogleAuthProvider()
const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error('google signIn error: ', error))
    }
    return (
        <div>
            <ButtonGroup className='mb-3' vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google </Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github </Button>
            </ButtonGroup>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twich</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;