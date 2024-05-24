import { useContext, useEffect, useState } from 'react';
import './newList.scss';
import { createList } from '../../context/listContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { getMovies } from '../../context/movieContext/apiCalls';

const NewList = () => {
    const [list, setList] = useState({});
    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value
        setList({ ...list, [e.target.name]: value });
    };

    const handleSelect = (e) => {
        e.preventDefault();

        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setList({ ...list, [e.target.name]: value });
    };

    console.log(list);

    const handleSubmit = (e) => {
        e.preventDefault();

        createList(list, dispatch);
    };

    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New List</h1>

            <form className="addProductForm">
                <div className="addProductItem">
                    <label for="listTitle">List Title</label>
                    <input id='listTitle' type="text" placeholder='Movie Title' name="title" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="genre">Genre</label>
                    <input id='genre' type="text" placeholder='Genre' name="genre" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="type">Type</label>
                    <select id='type' name='type' onChange={handleChange}>
                        <option>Type</option>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label for="content">Content</label>
                    <select multiple name='content' onChange={handleSelect}>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>{movie.title}</option>
                        ))}
                    </select>
                </div>

                <button className="addProductButton" type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
};

export default NewList;