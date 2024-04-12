import React from 'react'
import image from './image/IMDB_Logo_2016.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
       
       <img src={image} className='w-[50px]'/>
       <Link to='/' className='text-blue-400'>Movies</Link>
       <Link to='/watchlist' className='text-blue-400'>WatchList</Link>
       {/* <a href='/' className='text-blue-400'>Movies</a>
       <a href='/watchlist' className='text-blue-400'>WatchList</a> */}
    </div>
  )
}

export default NavBar 