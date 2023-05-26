import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Dashboard from './component/Dashboard/Dashboard';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import Otp from './component/Otp/Otp';
import ChangePassword from './component/ChangePassword/ChangePassword';
import AuthLayout from './layout/AuthLayout';
import Layout from './layout/indax'

function App() {

  const location = useLocation()

  const AuthLayoutRoute = ['/dashboard']

  return (
    <>
      {
        AuthLayoutRoute.includes(location.pathname) ?
          <AuthLayout>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </AuthLayout>
          :
          <Layout>
            <Routes>
              <Route path='/sigunp' element={<Signup />} />
              <Route path='/ForgotPassword' element={<ForgotPassword />} />
              <Route path='/otp' element={<Otp />} />
              <Route path='ChangePassword' element={<ChangePassword />} />
              <Route path='/' element={<Login />} />
            </Routes>
          </Layout>
      }
    </>
  );
}

export default App;
