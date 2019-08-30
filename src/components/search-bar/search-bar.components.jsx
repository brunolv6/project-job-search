import React from 'react';

import './search-bar.style.scss'

const SearchBar = ({ vagas, search, handleChange, handleSubmit}) => (
    <div className='search-bar'>
        <h1>Busque seu futuro</h1>
        <form onSubmit={handleSubmit}>
            <input className='search-input' type='search' name='search' value={search} onChange={handleChange}/>
            <button className='search-button' name='q'>Search</button>
        </form>
    </div>
)

export default SearchBar;