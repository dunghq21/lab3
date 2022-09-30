import React from 'react'
import { Link } from 'react-router-dom'
function Card({ data, theme }) {
    return (
        <div className='flex justify-around flex-wrap md:pt-[65px] mt-[60px] sm:mt-0'>
            {data.map(movie => (
                <div key={movie.id} className={theme ? 'h-[530px] md:h-[340px]  relative  w-[400px] p-4 bg-black/80 text-white rounded-lg m-3' : 'h-[530px] md:h-[340px] relative  w-[400px] p-4 bg-slate-300 rounded-lg m-3'}>
                    <div className='text-center md:flex items-start'>
                        <img className='m-2 w-[50%] block m-auto md:w-[150px]' src={movie.Image} alt='' />
                        <div className=''>
                            <h1 className='text-red-500 font-bold'>{movie.Title}</h1>
                            <h2>Year: {movie.Year}</h2>
                            <h2>Nation: {movie.Nation}</h2>
                            <p className='text-[14px]'>Description: {movie.des}</p>
                        </div>
                    </div>
                    <Link to={`/cardDetail/${movie.id}`}>
                        <button className='absolute bottom-2 left-[50%] translate-x-[-50%] bg-red-500 px-3 py-2 rounded hover:bg-red-300'>Detail</button>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default Card