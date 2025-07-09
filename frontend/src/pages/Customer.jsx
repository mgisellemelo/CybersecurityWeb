import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'

function Customer () {
    const[message, setMessage]=useState('');
    const[error, setError] = useState('');
    const [username, setUsername]=useState('')
    const [email, setEmail] = useState('')
    const [stats, setStats]=useState(null);
    const [messages, setMessages] = useState([]);
    const [lastLogin, setLastLogin] = useState('');
    const navigate = useNavigate();



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
    .then(data=> {
        setMessage(data.message);
        setEmail(data.email);
        setUsername(data.username);
        setStats(data.stats);
        setMessages(data.messages);
        setLastLogin(data.last_login);
    
    })
    .catch(err => {
        console.error(err);
        setError('You must login to see this page');
    });
}, []);

const handleLogout = () =>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
};

    return (
        <div className="dashboard-container">
            <h1>{message}</h1>
            {error ? (
                <p style={{color:'red'}}>{error}</p>
            ) : (
                <div>
                    <div className="dashboard-cards">
                        <div className="card">
                            <p><strong>Email:</strong>{email}</p>
                            <p><strong>Username:</strong>{username}</p>
                        </div>

                        {stats && (
                            <div className="card" style={{display:'flex', gaps:'1rem', margin:'1rem'}}>
                                <div>Alerts:{stats.alerts}</div>
                                <div>Logins:{stats.logins}</div>
                                <div>Last Login:{stats.last_login}</div>
                            </div>
                    )}
                    </div>
                    <div className="dashboard-card">
                        <div className="card">
                            <h2>Messages</h2>
                            <ul>
                                {messages.map((m, i) => (
                                    <li key={i}><strong>{m.title}:</strong>{m.content}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <button className="logout-button" onClick={handleLogout}>
                Log Out
            </button>
        </div>

    );
}


export default Customer;