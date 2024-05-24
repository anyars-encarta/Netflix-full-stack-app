import React, { useContext, useEffect } from 'react';
import './lists.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/apiCalls';

const Lists = () => {
    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/list/" + params.row._id, state: { list: params.row } }} className='link'>
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
                rows={lists}
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
