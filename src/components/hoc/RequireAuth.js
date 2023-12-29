import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const registration = localStorage.getItem('registration')
    if (!registration) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
}

export default RequireAuth;