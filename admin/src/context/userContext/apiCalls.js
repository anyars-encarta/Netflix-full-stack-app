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
        const res = await axios.post("/users/", user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(createUserSuccess(res.data));

    } catch (e) {
        dispatch(createUserFailure());
    }
};

// // Update a Movie
// export const updateMovie = async (id, movie, dispatch) => {
//     dispatch(updateMovieStart());

//     try {
//         const res = await axios.put(`/movies/${id}`, movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });

//         dispatch(updateMovieSuccess(res.data));

//     } catch (e) {
//         dispatch(updateMovieFailure());
//     }
// };

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
