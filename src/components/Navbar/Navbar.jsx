import {  NavLink, Outlet } from 'react-router-dom'
import './navbar.css'
// import { useContext } from 'react'
// import { authContext } from '../Providers/AuthProvider'




export default function Navbar() {

    // const { user, loading, userLogout } = useContext(authContext)



    return (

        <div>

            <div className="navbar bg-white top-0  text-black sm:px-3 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hidden" id="menu2">
                            <li ><NavLink to={'/'} className='visited:bg-[#808bfe]' onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Home</NavLink></li>
                            <li><NavLink to={'/all-toys'} className='visited:bg-[#808bfe]' onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>All Toys</NavLink></li>
                            <li><NavLink to={'/my-toys'} className='visited:bg-[#808bfe]' onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>My Toys</NavLink></li>
                            <li><NavLink to={'/add-toy'} className='visited:bg-[#808bfe]' onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Add Toy</NavLink></li>
                            <li><NavLink to={'/blog'} className='visited:bg-[#808bfe]' onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Blog</NavLink></li>

                        </ul>
                    </div>
                    <img src="logo.png" className='h-14' />
                    <a className="btn hover:bg-transparent btn-ghost text-3xl max-[380px]:text-2xl font-extrabold" href="/">
                        <label className="cursor-pointer font-extrabold text-[#FF290B]">T</label>
                        <label className="cursor-pointer font-extrabold text-slate-500">OY</label>
                        <label className="cursor-pointer font-extrabold text-[#FF290B]">B</label>
                        <label className="cursor-pointer font-extrabold text-slate-500">IZ</label>
                    </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-10 font-bold" id='navbar'>
                        <NavLink to={'/'} className=''>Home</NavLink>
                        <NavLink to={'/all-toys'} className=''>All Toys</NavLink>
                        {/* {user && */}
                        {
                            <>
                                <NavLink to={'/my-toys'} className=''>My Toys</NavLink>
                                <NavLink to={'/add-toy'} className=''>Add Toy</NavLink>
                            </>
                        }

                        <NavLink to={'/blog'} className=''>Blog</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* {!loading && !user &&
                        <Link to={'/login'} className="btn bg-[#808bfe] hover:bg-[#666fcb] border-none" >Sign In </Link>
                    }

                    {user &&

                        <div className="dropdown dropdown-end text-black tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <label tabIndex={0} className="btn bg-slate-400 border-none btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={!loading &&
                                        (user?.photoURL) ? user.photoURL : 'https://i.ibb.co/LxV7GQ6/vector-users-icon.jpg'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                <li><a onClick={() => userLogout()}>Logout</a></li>
                            </ul>
                        </div>

                    } */}










                </div>
            </div>

            <Outlet />



        </div>

    )
}