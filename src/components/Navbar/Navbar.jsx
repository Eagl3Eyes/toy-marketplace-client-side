import {Link, NavLink, Outlet} from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, loading, userLogout } = useContext(authContext)
    return (
        <div>
            <div className="navbar bg-[#e9f8ff] top-0  text-black md:px-10 px-6 ">
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
                    <img src="/logo.png" className='h-12 max-[380px]:h-10' />
                    <a className="normal-case text-3xl max-[380px]:text-2xl font-extrabold text-black" href="/">Toy<label style={{ color: '#808bfe' }} className="cursor-pointer font-extrabold">Shop</label> </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-10 font-bold" id='navbar'>
                        <NavLink to={'/'} className=''>Home</NavLink>
                        <NavLink to={'/all-toys'} className=''>All Toys</NavLink>
                        {user &&
                            <>
                                <NavLink to={'/my-toys'} className=''>My Toys</NavLink>
                                <NavLink to={'/add-toy'} className=''>Add Toy</NavLink>
                            </>
                        }

                        <NavLink to={'/blog'} className=''>Blog</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">

                    {!loading && !user &&
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

                    }










                </div>
            </div>

            <Outlet />

            <footer className="footer px-10 pt-10 bg-[#808bfe] text-white">
                <div>
                    <img src="/logo.png" className='h-12 max-[380px]:h-10 mx-auto' />
                    <a className="btn hover:bg-transparent btn-ghost normal-case text-3xl font-extrabold text-black" href="/">Toy<label style={{ color: 'white' }} className="cursor-pointer font-extrabold">Shop</label> </a>
                    <p>Get the toy you love.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Phone : 01323265518</a>
                    <a className="link link-hover">Email : jamilhossain3741@gmail.com</a>
                    <a className="link link-hover">Address : Chittagong , anowara.</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'https://www.facebook.com/jamil66'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                        <Link to={'https://twitter.com/'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to={'https://www.youtube.com/'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>

                    </div>
                </div>
            </footer>

            <footer className="footer bg-[#808bfe] footer-center py-5 text-white">
                <div>
                    <p>Copyright © 2023 -ToyShop . All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Navbar;