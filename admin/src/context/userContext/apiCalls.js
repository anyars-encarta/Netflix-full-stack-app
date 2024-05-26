import axios from "axios";
import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} from "./UserActions";

// Fetch Users
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());

    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getUsersSuccess(res.data));

    } catch (e) {
        dispatch(getUsersFailure());
    }
};

// Create a User
export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());

    try {
        const res = await axios.post("http://localhost:8800/api/auth/register", user);

        dispatch(createUserSuccess(res.data));

    } catch (e) {
        dispatch(createUserFailure());
    }
};

// Update a User
export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());

    try {
        const res = await axios.put(`/users/${id}`, user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateUserSuccess(res.data));

    } catch (e) {
        dispatch(updateUserFailure());
    }
};

// Delete a User
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());

    try {
        await axios.delete("/users/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(deleteUserSuccess(id));

    } catch (e) {
        dispatch(deleteUserFailure());
    }
};
