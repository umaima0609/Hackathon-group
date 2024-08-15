import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { BiUserCircle } from 'react-icons/bi';
import { useAuth } from './Auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { HiOutlineLogout } from "react-icons/hi";
import Logo from '../assets/smit-logo.png';
import toast from "react-hot-toast";

export default function Nav() {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const { theme, settheme, auth, setauth } = useAuth();

    const handle = () => {
        setNav(!nav);
    }

    const handletheme = () => {
        settheme(theme === "light" ? "dark" : "light");
    }

    const handleLogOut = () => {
        setauth({
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
        navigate('/');
        toast.success("Logged out successfully");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localtheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute("data-theme", localtheme);
    }, [theme]);

    const linkClasses = 'mx-2 font-bold text-lg hover:border-b-2 border-blue-700';

    return (
        <div className=''>
            <div className='flex justify-between items-center px-4 py-4 shadow-lg'>
                <section className='flex items-center'>
                    <Link to="/" className='mx-4 my-6 font-bold text-md sm:text-2xl text-blue-800 cursor-pointer flex items-center'>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: '66px', height: '50px' }}
                            className='mr-2'
                        />
                        SMIT STUDENT <span className='text-green-600'> FEEDBACKER</span>
                    </Link>
                </section>
                <section onClick={handle} className='sm:hidden'>
                    {nav ? <GiCancel size={23} /> : <GiHamburgerMenu size={23} />}
                </section>

                <ul className='hidden md:flex items-center cursor-pointer'>
                    <li className={linkClasses} onClick={() => navigate("/")}>Home</li>
                    <li className={linkClasses} onClick={() => navigate("/about")}>About</li>

                    <li className='mx-2 my-1 font-semibold hover:border-b-2'>
                        <section>
                            {theme === "light" ? (
                                <section className='flex items-center' onClick={handletheme}>
                                    <MdDarkMode size={23} className='text-black' />
                                </section>
                            ) : (
                                <section className='flex items-center' onClick={handletheme}>
                                    <MdOutlineLightMode size={23} className='text-white' />
                                </section>
                            )}
                        </section>
                    </li>

                    <li style={{ marginLeft: '50px' }}></li>


                    <li className='block'>
                        {!auth?.user ? (
                            <div className='flex justify-center items-center font-bold '>
                                <button className={`mx-2 border-[1px] text-lg py-[0.5px] hover:bg-blue-600 hover:text-white rounded-full px-5 ${theme === "light" ? "text-black hover:border-blue-700 border-black" : "text-white hover:border-blue-700"}`} onClick={() => navigate("/login")}> Login</button>
                                <button className={`mx-2 border-[1px] text-lg py-[0.5px] hover:bg-blue-600 hover:text-white rounded-full px-4 ${theme === "light" ? "text-black hover:border-blue-700 border-black" : "text-white hover:border-blue-700"}`} onClick={() => navigate("/signup")}>Signup</button>
                            </div>
                        ) : (
                            <>
                                {auth?.user?.role === 1 ? (
                    <div className='flex flex-row cursor-pointer' onClick={() => navigate('/hod')}>
                       <li className='ml-0'>
                      <BiUserCircle size={30} className='text-blue-700' />
                       </li>
                     <li className={linkClasses}>Hod</li>
                       </div>
                       ) : auth?.user?.role === 2 ? (
                    <div className='flex flex-row cursor-pointer' onClick={() => navigate('/Admin')}>
                    <li className='ml-0'>
                        <BiUserCircle size={30} className='text-blue-700' />
                     </li>
                        <li className={linkClasses}>Principal</li>
                       </div>
                       ) : (
                <div className="flex flex-row">
                <li className="cursor-pointer">
                   <BiUserCircle size={30} className="text-blue-700" />
                   </li>
                   <Link className={linkClasses}>{auth?.user?.name}</Link>
                    </div>
                      )}

                            </>
                        )
                        }
                    </li>

                   
                </ul>
            </div>

            <section className='sm:hidden cursor-pointer'>
                <ul className={`bg-gray-300 flex flex-col absolute left-0 h-screen shadow-sm ${nav ? 'w-[90%] sm:w-17' : "w-0 overflow-hidden"} transition-all ease-linear duration-200`}>
                    <li className={linkClasses} onClick={() => navigate("/")}>Home</li>
                    <li className={linkClasses} onClick={() => navigate("/about")}>About</li>
                    <li className={linkClasses} onClick={() => navigate("/feedback")}>FeedBack Form</li>
                    

                    <li className='mx-2 text-black my-1 font-semibold hover:border-b-2'>
                        <section>
                            {theme === "light" ? (
                                <section className='flex items-center' onClick={handletheme}>
                                    <h1 className='text-black font-semibold'>Dark Mode</h1>
                                    <MdDarkMode size={30} className='text-black' />
                                </section>
                            ) : (
                                <section className='flex items-center' onClick={handletheme}>
                                    <h1 className='text-black font-semibold'>Light Mode</h1>
                                    <MdOutlineLightMode size={30} className='text-white' />
                                </section>
                            )}
                        </section>
                    </li>

                    <li onClick={handleLogOut} className={`${theme === "light" ? "" : "text-white"} flex mt-2 text-black hover:border-b-2 border-blue-700`}>
                    &nbsp; <span className='font-bold'>Logout&nbsp;</span> <HiOutlineLogout size={27} className='pr-2 mt-1 pb-2' />
                    </li>
                </ul>
            </section>
        </div>
    );
}
