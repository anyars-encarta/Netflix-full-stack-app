import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './userList.scss';

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
       setData(data.filter((item) => item.id !== id))
    };

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img src={params.row.avatar} alt='' className='userListImage' />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
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
            />
        </div>
    )
}

export default UserList