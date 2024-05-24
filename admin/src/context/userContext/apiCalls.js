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

// Create a Movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());

    try {
        const res = await axios.post("/movies/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(createMovieSuccess(res.data));

    } catch (e) {
        dispatch(createMovieFailure());
    }
};

// Update a Movie
export const updateMovie = async (id, movie, dispatch) => {
    dispatch(updateMovieStart());

    try {
        const res = await axios.put(`/movies/${id}`, movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateMovieSuccess(res.data));

    } catch (e) {
        dispatch(updateMovieFailure());
    }
};

// Delete a Movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());

    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(deleteMovieSuccess(id));

    } catch (e) {
        dispatch(deleteMovieFailure());
    }
};
