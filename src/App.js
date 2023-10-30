import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line
import AdminLayout from './Components/AdminLayout';
import LoginPage from './Components/LoginComponent';
import RegistrationPage from './Components/RegistrationComponent';
import ForgotPasswordPage from './Components/ForgotPasswordComponent';
import Dashboard from './Components/DashboardComponent';
import ProfilePage from './Components/ProfileComponent';
import ChangePassPage from './Components/ChangePassword';
import FormPage from './Components/UploadForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="change-password" element={<ChangePassPage />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
