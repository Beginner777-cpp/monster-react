import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ changeHandler, placeholder }) => {
  return (
    <input className="search" type="text" onChange={changeHandler} placeholder={placeholder} />
  )
}