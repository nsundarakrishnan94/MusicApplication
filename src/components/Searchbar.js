import React from 'react'
import './Searchbar.css' 
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {
    return (
        <>
        <form className='searchform' onsubmit="" >
        <input id="search" type="search" placeholder="Search..." autofocus required  />  
      </form>   
        </>
    )
}

export default Searchbar
