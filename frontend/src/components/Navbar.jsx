import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <header className="navbar">
            <div className="container">
                <nav>
                    <Link to= "/">Home</Link> | {""}
                    <a href="#services" className="nav-link">Services </a>|{""}
                    <a href="#contact" className="nav-link">Contact </a>|{""}
                    <Link to= "/login">Login</Link> | {""}
                    <Link to= "/register">Register</Link> |{""}
                    <Link to= "/customer">Customer</Link> |{""}
                </nav>
                <h1>CYBERSHIELD</h1>
            </div>
        </header>
    );

}

export default Navbar;