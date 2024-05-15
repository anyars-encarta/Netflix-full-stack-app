import React, { useState } from 'react';
import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../constants/userTable';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
 };
 
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'name', headerName: 'Product Name', width: 200, renderCell: (params) => {
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
                    <Link to={"/product/" + params.row.id} className='link'>
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

export default ProductList