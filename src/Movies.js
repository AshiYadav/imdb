import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from './Pagination'

const Movies = () => {

    

    const [movies, setMoviesFromTMDB] = useState([]);
    const[pageNum, setPageNumber] = useState(1);

    const onNext = () =>{
        setPageNumber(pageNum+1);
    }
    const onPrev = () =>{
        if(pageNum > 1){
            setPageNumber(pageNum-1);
        }
    }

    useEffect(() => {

        (function () {
            axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=51c5b9da375151a548e0f400e9924cff&page=${pageNum}`).then(data => {

                setMoviesFromTMDB(data.data.results);
            }).catch(err => {
                console.log("Error while fetching trending movies from TMDB", err)
            })
        })();
    }, [pageNum]);

    console.log(movies);

    return (
        <div>
            <div className='text-center text-2xl mb-8 font-bold'>Trending Movies
            </div>


            <div className='flex flex-wrap'>

                {movies.map((movie) => {
                    return <div key={movie.id} 
                                className='w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex items-end'
                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/orignal/t/p/w500/${movie.poster_path})`, }}>

                            <div className='text-white w-full font-bold bg-gray-900 bg-opacity-60'>{movie.title}</div>
                        </div>
                    })}


            </div>

            <Pagination pageNum={pageNum} onNext={onNext} onPrev={onPrev} />

        </div>


    )
}

export default Movies