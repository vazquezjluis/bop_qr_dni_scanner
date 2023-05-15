import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuthStore } from './store/auth';
import Layout from './components/Layout/Layout';
import HistorialPage from './pages/HistorialPage/HistorialPage';
import ScannerPage from './pages/ScannerPage/ScannerPage';


const App: React.FC = () => {
  const token = useAuthStore((state) => state.token);

  return (
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={token ? <Layout showMenu={true}/> : <LoginPage />}>
          <Route path="/scanner" element={<ScannerPage />} />
        </Route>
        <Route path="/" element={token ? <Layout showMenu={true}/> : <LoginPage />}>
          <Route path="/historial" element={<HistorialPage />} />
        </Route>
      </Routes>
  );
};

export default App;



