import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AppPage from './pages/AppPage';
import Login from './pages/Login';
import Translator from './pages/Translator'
import Signup from './pages/signup';
import { useState } from 'react';
import SignLanguageConverter from './components/Translator/SignLanguageConverter.jsx';



function App() {
  const [userlogin, setUserlogin] = useState(null);
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar userlogin={userlogin} />
        <Routes>
          <Route path="/" element={<Navigate to="/app" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/login" element={<Login setUserlogin={setUserlogin} />} />
          <Route path="/Signup" element={<Signup />} />

         
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;