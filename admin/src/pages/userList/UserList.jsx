import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './userList.scss';
import { UserContext } from '../../context/userContext/UserContext';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';

const UserList = () => {
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        {
            field: 'username', headerName: 'Username', width: 150, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.img} alt='' className='userListImage' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'fullname', headerName: 'Full Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'isAdmin', headerName: 'IsAdmin', width: 120 },
        { field: 'isActive', headerName: 'IsActive', width: 120 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/user/" + params.row._id, state: { user: params.row } }} className='link'>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)} />
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