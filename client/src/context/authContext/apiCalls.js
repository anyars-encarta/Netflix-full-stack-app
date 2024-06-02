import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", user);
        dispatch(loginSuccess(res.data));
        // Refresh page after login
        // window.location.reload();
    } catch (e) {
        dispatch(loginFailure());
    }
};