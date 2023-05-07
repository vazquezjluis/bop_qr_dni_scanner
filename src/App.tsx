import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuthStore } from './store/auth';
import ScannerPage from './pages/ScannerPage/ScannerPage';

const App: React.FC = () => {
  const token = useAuthStore((state) => state.token);
  console.log({token});
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/scanner" element={ 
          // token ? 
          <ScannerPage /> 
          // : <LoginPage />
          } 
          />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


