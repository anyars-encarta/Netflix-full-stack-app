// protectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;