import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'; 
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

// components
import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Faq from './pages/Faq'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound'
import Tickets from './pages/Tickets'
import ThankYou from './pages/Tickets/ThankYou';
import Order from './pages/Tickets/Order'
import AppLayout from './layouts/AppLayout';

import './App.css';


function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className='App bg-jade-100'>
      {authIsReady && (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
          <ScrollToTop />
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lineup" element={<Lineup />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/tickets/" element={user ? <Tickets /> : <Navigate to="/account/login" />} >
                  <Route index element={<Order />} />
                  <Route path="order" element={<Order />} />
                  <Route path="thankyou" element={<ThankYou />} />
                </Route>
                <Route path="/account">
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="*" element={<Notfound />} />
              </Routes>
            </AppLayout>
          </ThemeProvider>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
