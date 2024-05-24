import axios from "axios";
import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure,
    createListStart,
    createListSuccess,
    createListFailure,
    updateListStart,
    updateListSuccess,
    updateListFailure,
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

// Create a List
export const createList = async (list, dispatch) => {
    dispatch(createListStart());

    try {
        const res = await axios.post("/lists/", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(createListSuccess(res.data));

    } catch (e) {
        dispatch(createListFailure());
    }
};

// Update a Movie
export const updateList = async (id, list, dispatch) => {
    dispatch(updateListStart());

    try {
        const res = await axios.put(`/lists/${id}`, list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(updateListSuccess(res.data));

    } catch (e) {
        dispatch(updateListFailure());
    }
};

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
