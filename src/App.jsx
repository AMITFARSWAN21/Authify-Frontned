import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { EmailVerify } from './pages/EmailVerify';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ResetPassword } from './pages/ResetPassword';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import UploadedNotes from './pages/UploadedNotes';
import { Layout } from './components/Layout'; // ✅
import Registration from './pages/Registration';
import { StudentRegistered } from './pages/StudentRegistered';
import CertificateGenerator from './pages/CertificateGenerator';
import NotesSummarizer from './pages/NotesSummarizer';
import AddMarksForm from './pages/AddMarksForm';
import StudentMarksViewer from './pages/StudentMarksViewer';
import  StudyPlanGenerator  from './pages/StudyPlanGenerator';

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
          <Route path="/generate-certificate" element={<CertificateGenerator />} />
          <Route path="/notes-summarizer" element={<NotesSummarizer />} />
          <Route path="/add-marks" element={<AddMarksForm/>} />
          <Route path="/get-marks" element={<StudentMarksViewer/>} />
          <Route path="/study-plan" element={<StudyPlanGenerator/>} />
          
          
          
        </Route>
      </Routes>

      {/* <EducationalFooter /> */}
    </div>
  );
};

export default App;
