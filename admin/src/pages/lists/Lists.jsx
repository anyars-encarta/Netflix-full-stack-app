import React, { useContext, useEffect, useState } from 'react';
import './lists.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

const Lists = () => {
    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
                return (
                    <div className='productListProduct'>
                        <img src={params.row.img} alt='' className='productListImage' />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/movie/" + params.row._id, state: { movie: params.row } }} className='link'>
                            <button className="productListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productList'>
            <DataGrid
                rows={movies}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    )
}

export default Lists;
