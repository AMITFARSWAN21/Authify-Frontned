import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { EmailVerify } from './pages/EmailVerify';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ResetPassword } from './pages/ResetPassword';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
// import { EducationalFooter } from './components/EducationalFooter';
import AdminDashboard from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import UploadedNotes from './pages/UploadedNOtes';
import { Layout } from './components/Layout'; // ✅
import Registration from './pages/Registration';
import { StudentRegistered } from './pages/StudentRegistered';

const App = () => {
  return (
    <div>
      <ToastContainer />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verify" element={<EmailVerify />} />

        {/* Protected Routes with Menubar */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<UploadedNotes />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-registration" element={<Registration/>} />
          <Route path="/student-registered" element={<StudentRegistered/>} />
          
          
        </Route>
      </Routes>

      {/* <EducationalFooter /> */}
    </div>
  );
};

export default App;
