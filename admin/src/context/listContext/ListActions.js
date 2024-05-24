// fetch Lists
export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
});

// // Create a Movie
// export const createMovieStart = () => ({
//     type: "CREATE_MOVIE_START",
// });

// export const createMovieSuccess = (movie) => ({
//     type: "CREATE_MOVIE_SUCCESS",
//     payload: movie,
// });

// export const createMovieFailure = () => ({
//     type: "CREATE_MOVIE_FAILURE",
// });

// Update a List
export const updateListStart = () => ({
    type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: list,
});

export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
});

// Delete Movie
export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
});