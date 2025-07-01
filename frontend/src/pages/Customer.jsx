import {useEffect, useState} from 'react';


function Customer () {
    const[message, setMessage]=useState('');
    const[error, setError] = useState('');
    
    useEffect(() => {
        const token= localStorage.getItem('access_token'); //token saved in login

        fetch('http://localhost:8000/api/customer/', {
            headers: {
                 Authorization: `Bearer ${token}` ,
            },
    })
        
        .then(res => {
            if(!res.ok){
                throw new Error('Access no authorized');

            }
        return res.json();
    })
    .then(data=> setMessage(data.message))
    .catch(err => {
        console.error(err);
        setError('You must login to see this page');
    });
}, []);

    return (
        <div>
            <h1>Welcome to your landing page</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {message && <p>{message}</p>}
        </div>
    );
}


export default Customer;