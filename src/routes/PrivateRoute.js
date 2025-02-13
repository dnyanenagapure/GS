import React from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import authStore from '../stores/AuthStore';

const PrivateRoute = observer(({ children }) => {
    return authStore.isAuthenticated ? children : <Navigate to="/login" replace />;
});

export default PrivateRoute;
