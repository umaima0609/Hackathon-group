import React from 'react'
import { useAuth } from './Auth/AuthContext'
import dashImg from "../assets/about-dashboard-img.png"
import { Link, useNavigate } from 'react-router-dom'
import { BsInstagram, BsGithub } from 'react-icons/bs'
import Nav from './Nav'
import Footer from './Footer'



const About = () => {
    
    const { theme } = useAuth()
    
    return (
        
        <div className={`p-2  h-[100vh] overflow-y-auto sm:p-5 ${theme == "light" ? "bg-white " : "bg-[#1d232a]"}`}>
            <Nav />
            <div className='h-full sm:h-[50vh] mt-11 p-4 w-[100%] flex flex-col  sm:flex-row'>
                <section className='w-[100%] h-[50%] sm:w-[50%] flex justify-center flex-col  items-center'>
                   <br /><br /> <br /><br /><br /><h1 className='font-bold px-2 text-lg sm:text-4xl'>Welcome to Saylani Mass IT Traning Feedbacker</h1>
                    <p className='font-bold text-sm sm:text-xl px-2 mt-3'>
                        {`"Welcome to Feedbacker – Your Voice Matters! This platform bridges the gap between
                    students and departments, allowing seamless feedback submission and in-depth analysis.
                    Join us in shaping a better academic experience!"`}
                    </p>
                </section>
                <section className='px-5 mt-5 sm:h-[60%] h-[30%] flex justify-center items-center  w-[100%] sm:w-[60%]'>

                    <img src={dashImg} alt='' className=' w-[100%] sm:w-[70%] h-[100%] border-2 rounded-lg' />
                </section>
            </div><br /><br />
            <section className='w-full  h-[2vh] flex justify-center items-center'>
                <h1 className='font-bold text-xl text-center  border-b-2 '>About Trainers</h1>
            </section>

            <div className=" mt-2 w-[100%] ">
                <div className=' p-7 grid grid-cols-1 items-center sm:grid-cols-2 gap-2'>
                <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>
                        <h1 className='font-bold text-xl p-2'>Faiza Aziz </h1>
                        <h1 className='px-2 '>Mernstack Female Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/FazzyA' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/Faiza' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>
                        <h1 className='font-bold text-xl p-2'>Miss Iqra </h1>
                        <h1 className='px-2 '>Mernstack Female Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/iqra' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/iqra' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>                        <h1 className='font-bold text-xl p-2'>Muneeba Rashid  </h1>
                        <h1 className='px-2 '>UI/UX Female Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/muneeba' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/muneeba' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>                        <h1 className='font-bold text-xl p-2'>Hafsa Abid</h1>
                        <h1 className='px-2 '>Graphic Designing Female Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/hafsa' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/hafsa' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>                        <h1 className='font-bold text-xl p-2'>Ghouse Aehmad </h1>
                        <h1 className='px-2 '>MernStack Male Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/ghouse' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/ghouse' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                    <div
  className={`hover:scale-110 my-5 mx-5 transition-all ease-linear w-[90%] duration-200 relative p-3 flex justify-center items-start flex-col rounded-lg h-40 
    ${theme === "light" ? "bg-gray-100 border-2 border-gray-700" : "bg-[#0c131d] border-2 border-gray-300 shadow-lg"}
  `}
>                        <h1 className='font-bold text-xl p-2'>Aisha Khan </h1>
                        <h1 className='px-2 '>Mernstack Female Trainer</h1>
                        <div className='flex flex-row space-x-4 px-2 '>
                            <Link to='https://github.com/aishakhan' className='py-4 cursor-pointer'>
                                <BsGithub size={20} />
                            </Link>
                            <Link to='https://instagram.com/aishakhan' className='py-4 cursor-pointer'>
                                <BsInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About
