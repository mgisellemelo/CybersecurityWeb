import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Customer from './pages/Customer';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login Page />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={
          <PrivateRoute>
            <Customer />
          </PrivateRoute>
          }
        />
        

      </Routes>
    </Router>
  );
}

export default App
