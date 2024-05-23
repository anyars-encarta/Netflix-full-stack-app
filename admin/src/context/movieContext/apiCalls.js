import axios from "axios";
import {
    getMoviesStart,
    getMoviesSuccess,
    getMoviesFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    deleteMovieFailure,
    createMovieStart,
    createMovieSuccess,
    createMovieFailure,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure,
} from "./MovieActions";

// Fetch Movies
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());

    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getMoviesSuccess(res.data));

    } catch (e) {
        dispatch(getMoviesFailure());
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
        const res = await axios.put("/movies/" + id, movie, {
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
