import React, { useContext, useEffect, useState } from 'react';
import './movieList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies } from '../../context/movieContext/apiCalls';

const MovieList = () => {
    // const [data, setData] = useState(productRows);
    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        // setData(data.filter((item) => item._id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'name', headerName: 'Movie Title', width: 200, renderCell: (params) => {
                return (
                    <div className='productListProduct'>
                        <img src={params.row.img} alt='' className='productListImage' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Unit Price', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/movie/" + params.row.id} className='link'>
                            <button className="productListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productList'>
            {/* <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            /> */}
        </div>
    )
}

export default MovieList;