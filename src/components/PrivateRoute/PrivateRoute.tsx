import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const token = useAuthStore((state) => state.token);

    return (
        <Route
            {...rest}
            // if token is not null, render children, otherwise redirect to login
            element={token ? children : <Navigate to="/login" />}

        />
    );
};

export default PrivateRoute;
