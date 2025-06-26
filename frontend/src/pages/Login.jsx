import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

        const response = await fetch ('http://localhost:8000/api/login/', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password,
            }),
        });//backend petition
        const data= await response.json();
        
        if (response.ok){
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            navigate('/customer');
        } else {
            setError(data.error || 'Login error')
        }
    } catch (err){
        console.error(err);
        setError('Conexion error with the server');
    }
    
    };

    return (
        <div className="login-page">         
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                 <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                    <button type="submit">Login</button>
                    {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Login;