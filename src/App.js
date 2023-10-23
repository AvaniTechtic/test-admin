import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line
// import AdminLayout from './Components/AdminLayout';
import LoginPage from './Components/LoginComponent';
import RegistrationPage from './Components/RegistrationComponent';
import ForgotPasswordPage from './Components/ForgotPasswordComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="/admin/*">
            <AdminLayout>
              <Routes>
                <Route index element={<RegistrationPage />} />
              </Routes>
            </AdminLayout>
          </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
