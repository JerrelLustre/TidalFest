import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material'

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
import { theme } from './theme/theme';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>

          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lineup" element={<Lineup />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/tickets/" element={<Tickets />} >
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
    </div>
  );
}

export default App;
