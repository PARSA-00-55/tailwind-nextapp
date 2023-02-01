import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h2>Ops.. Looks like you are lost.</h2>
            <Link href='/'><button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;