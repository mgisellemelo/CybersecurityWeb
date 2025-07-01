import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Register (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message);
                setError('');
                setTimeout(() => navigate('/login'), 1500);
            } else {
                setError(data.erorr || 'Registration failed');
                setSuccess('');
            }
        } catch (err) {
            console.error(er);
            setError('Server connection failed');
            setSuccess('');
        }
    };

    return (
        <div className="register-page">
            <h2>Register to continue</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {error&&<p style={{color:'red'}}>{error}</p>}
                {success&&<p style={{color: 'green'}}>{success}</p>}

            </form>
        </div>
    );
}

export default Register;