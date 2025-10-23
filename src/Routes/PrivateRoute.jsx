import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-700 text-lg font-semibold">
            Loading winter services...
          </p>
        </div>
      </div>
    );
    }

    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;