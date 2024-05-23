import axios from "axios";
import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure,
    // createMovieStart,
    // createMovieSuccess,
    // createMovieFailure,
    // updateMovieStart,
    // updateMovieSuccess,
    // updateMovieFailure,
} from "./ListActions";

// Fetch Lists
export const getLists = async (dispatch) => {
    dispatch(getListsStart());

    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getListsSuccess(res.data));

    } catch (e) {
        dispatch(getListsFailure());
    }
};

// // Create a Movie
// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMovieStart());

//     try {
//         const res = await axios.post("/movies/", movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });

//         dispatch(createMovieSuccess(res.data));

//     } catch (e) {
//         dispatch(createMovieFailure());
//     }
// };

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

// Delete a List
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());

    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(deleteListSuccess(id));

    } catch (e) {
        dispatch(deleteListFailure());
    }
};
