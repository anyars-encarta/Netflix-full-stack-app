import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './userList.scss';
import { UserContext } from '../../context/userContext/UserContext';
import { getUsers } from '../../context/userContext/apiCalls';

const UserList = () => {
    const { users, dispatch } = useContext(UserContext);
    
    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
    //    setData(data.filter((item) => item.id !== id))
    };

const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
        field: 'user', headerName: 'Username', width: 250, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img src={params.row.avatar} alt='' className='userListImage' />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'isAdmin', headerName: 'IsAdmin', width: 120 },
    {
        field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={"/user/" + params.row.id} className='link'>
                        <button className="userListEdit">Edit</button>
                    </Link>

                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        }
    },
];

    return (
        <div className='userList'>
            <DataGrid
                rows={users}
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

export default UserList