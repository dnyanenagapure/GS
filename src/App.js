// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <><Header/>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
        <Footer/>
        </>
    );
};

export default App;
