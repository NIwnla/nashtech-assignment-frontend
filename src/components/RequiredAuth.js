import { Navigate } from "react-router-dom";

const RequiredAuth = (props) => {
    const { children } = props;
    const { isAuthen } = true;
    return isAuthen ? children : <Navigate to="/login" />
}

export default RequiredAuth