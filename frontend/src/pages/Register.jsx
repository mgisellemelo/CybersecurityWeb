import {useState} from 'react';


function Register (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //backend petition
        console.log('Register data', {name, email, password});
    };

    return (
        <div className="register-page">
            <h2>Register to continue</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

            </form>
        </div>
    );
}

export default Register;