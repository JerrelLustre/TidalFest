import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

import './App.css';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Faq from './pages/Faq'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound'
import Tickets from './pages/Tickets'

function App() {

  return (
    <div className='App'>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/tickets">
              <Route path="select" element={<Tickets />} />
              <Route path="order" element={<Tickets />} />
              <Route path="receipt" element={<Tickets />} />
            </Route>
            <Route path="/account">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
