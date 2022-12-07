import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
