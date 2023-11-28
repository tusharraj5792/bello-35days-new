import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getItem } from '../utilities/utils';

const useAuth = () => {
  const _token = getItem('token');
  
  if (_token) {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};

const ProtectedRoutes = (ProtectedRouteType) => {
  const location = useLocation();
  const { auth, role } = useAuth();
  
  //if the role required is there or not
  if (ProtectedRouteType.roleRequired) {
    return auth ? (
      ProtectedRouteType.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? (
      <Outlet />
    ) : (
      <Navigate
        to="/login"
        state={{ from: location.pathname, search: location.search }}
      />
    );
  }
};

export default ProtectedRoutes;
