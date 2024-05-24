import './singleList.scss';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../constants/chartData';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/listContext/ListContext';
import { updateList } from '../../context/listContext/apiCalls';

const SingleList = () => {
    const title = 'Downloads Performance';
    const location = useLocation();
    const pathname = location.pathname;
    const listId = pathname.split('/').pop();
    const [list, setList] = useState(location.state?.list || null);

    const { dispatch } = useContext(ListContext);

    const fetchListById = async (listId) => {
        try {
            const res = await axios.get(`http://localhost:8800/api/lists/find/${listId}`, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }
            });
            
            return res.data;

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (!list) {
            fetchListById(listId).then(fetchedList => setList(fetchedList));
        }
    }, [listId, list]);

    console.log('This is the list data: ', list)

    //UPDATE STARTS HERE
        const handleChange = (e) => {
            const value = e.target.value
            setList({ ...list, [e.target.name]: value });
        };

        const handleUpdate = (e) => {
            e.preventDefault();
            updateList(list._id, list, dispatch);
        };
    //UPDATE ENDS HERE

        if (!list) {
            return <div />;
        }

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>

                <Link to='/newList'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title={title} data={productData} xDataKey='name' dataKey='Sales' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{list?.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list?._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{list?.genre}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Type:</span>
                            <span className="productInfoValue">{list?.type}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label for="pname">List Title</label>
                        <input id='pname' type="text" placeholder={list?.title} name="title" value={list?.title || ''} onChange={handleChange} />

                        <label for="year">Year</label>
                        <input id="year" type="text" placeholder={list?.type} name="year" value={list?.type || ''} onChange={handleChange} />

                        <label for="genre">Genre</label>
                        <input id="genre" type="text" placeholder={list?.genre} name="genre" value={list?.genre || ''} onChange={handleChange} />
                    </div>

                    <div className="productFormRight">
                        <button className="productButton" onClick={() => handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingleList;