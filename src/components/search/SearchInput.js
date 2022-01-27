import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from "../../state/actions/SearchProfileAction";
import { fetchProfileRepos } from '../../state/actions/SearchReposActions';

const SearchInput = () => {

    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.search);

    const handleChange = (e) => {
        dispatch({ type: "UPDATE_INPUT_VALUE", payload: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.value) {
            dispatch({ type: "UPDATE_INPUT_ERROR" });
        } else {
            dispatch(fetchUserProfile(inputValue.value));
            dispatch(fetchProfileRepos(inputValue.value));
            dispatch({ type: "UPDATE_INPUT_VALUE", payload: "" });
        }
    }

    return (
        <div className='search_input'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => handleChange(e)} value={inputValue.value} type="text" placeholder='Search profile...' />
                <button type='submit'>Search</button>
                {inputValue.error && <div className='error'>Error: your field is empty!</div>}
            </form>
        </div>
    )
};

export default SearchInput;
