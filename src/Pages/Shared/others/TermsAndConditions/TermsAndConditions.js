import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2 className='text-center'>here is our terms & conditions!!!</h2>
            <p>Go back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;