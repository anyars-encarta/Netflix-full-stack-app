import React from 'react';
import './newProduct.scss';

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Product</h1>

            <form className="addProductForm">
                <div className="addProductItem">
                    <label for="productImage">Image</label>
                    <input id='productImage' type="file" />
                </div>

                <div className="addProductItem">
                    <label for="productName">Product Name</label>
                    <input id='productName' type="text" placeholder='Product Name' />
                </div>

                <div className="addProductItem">
                    <label for="productStock">Stock</label>
                    <input id='productStock' type="text" placeholder='Stock' />
                </div>

                <div className="addProductItem">
                    <label for="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">NO</option>
                    </select>
                </div>

                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct