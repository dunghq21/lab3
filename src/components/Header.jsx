import React from 'react'
import { Link } from 'react-router-dom'

function Header({ theme, setTheme }) {
    return (
        <div className={theme ? 'flex justify-around items-start pb-2 top-0 w-full  fixed pt-4 z-50 bg-black/40' : 'flex justify-around items-start pb-2 top-0 w-full  fixed pt-4 z-50 bg-black'}>
            <div>
                <ul className={theme ? 'list-none flex text-black' : 'list-none flex text-white'}>
                    <Link to={'/'}>
                        <li className='cursor-pointer text-sm md:text-2xl mx-2'>
                            Home
                        </li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className='cursor-pointer text-sm md:text-2xl mx-2'>
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                <Link to={'/'}>
                    <h1 className={theme ? 'cursor-pointer text-[22px] sm:text-3xl leading-[100%] text-center text-red-500 sm:text-[50px]' : 'cursor-pointer text-[22px] sm:text-3xl leading-[100%] text-center text-white sm:text-[50px]'}>D Movies</h1>
                </Link>
            </div>
            <div>
                <span className='border-white bg-white text-red-500 border select-none px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-red-500' onClick={() => setTheme(!theme)}>{theme ? "Light" : "Dark"}</span>
            </div>
        </div>
    )
}

export default Header