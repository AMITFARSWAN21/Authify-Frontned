import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { EmailVerify } from './pages/EmailVerify';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ResetPassword } from './pages/ResetPassword';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { EducationalFooter } from './components/EducationalFooter';
import AdminDashboard from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute'; // adjust path if needed
import UploadedNotes from './pages/UploadedNOtes';

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
        <Route path="/notes" element={<UploadedNotes/>} />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/admin-dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>

      

      {/* Always show footer */}
      <EducationalFooter />
    </div>
  );
};

export default App;
