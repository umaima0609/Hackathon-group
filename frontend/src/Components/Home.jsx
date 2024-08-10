import React, { useEffect } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext';
import { TypeAnimation } from 'react-type-animation';
import lottie from 'lottie-web';
import toast from "react-hot-toast";
import { HiOutlineLogout } from "react-icons/hi";
import ppj from "./ff.json";

const Home = () => {

    const { theme, auth, setauth } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        setauth({
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
        navigate('/');
        toast.success("Logout Successfully");
    }

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: document.getElementById('pp'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: ppj,
        });
        return () => anim.destroy();
    }, []);

    return (
        <div>
            {/* <section className={`${theme === "light" ? "bg-white" : "bg-[#1d232a]"} hidden sm:block p-6 font-bold  w-full justify-center items-center `}>
                {auth?.user?.role === 0 ? (
                    <section className='flex justify-end mr-[22vh] items-end'>
                        <Link
                            className={`${theme === "light" ? "" : "text-white"} mx-2 mt-2 text-black hover:border-b-2 border-blue-700`}
                            to='/feedback'
                        >
                            Course Feed
                        </Link>
                        <li
                            onClick={handleLogOut}
                            className={`${theme === "light" ? "" : "text-white"} flex  text-black  border-blue-700`}
                        >  
                            <HiOutlineLogout size={30} className='pr-2 ml-3 pb-2' />
                        </li>
                    </section>
                ) : (
                    <></>
                )}
            </section> */}

            <div className={`${theme === "light" ? "bg-white" : "bg-[#1d232a]"} flex flex-col sm:flex-row h-screen `}>
                <div className='h-[50vh] w-full sm:h-[81vh] sm:w-[43%] flex flex-col  justify-center  items-start p-5 '>
                    <p className={`${theme === "light" ? "" : "text-white"} md:ml-[8vh]`}>
                        <h1 className={`font-bold  text-4xl mt-2 sm:text-5xl px-2`}> Feedbacker   </h1>
                        <h1 className='font-bold w-[100%] sm:w-[100%] mt-4 p-2 sm:text-xl'>Welcome to Your Feedback Dashboard!
                          Your insights and feedback play a crucial role in improving our academic programs. This platform allows you to submit feedback seamlessly and view insightful analysis on your interactions. Customize this dashboard with additional content or resources that matter to you. Stay informed, stay engaged, and help us create a better learning environment!</h1>
                        <TypeAnimation
                            sequence={[
                                ' Better Student Experiences ',
                                2000,
                                '  Improvement',
                                2000,
                                ' Building Trust',
                                2000,
                                ' More Engagement    ',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: ' 2rem', display: 'inline-block', paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </p>
                </div>
                <div className='w-full sm:w-[60%] sm:h-[81vh] h-[40vh] flex justify-center  items-center  '>
                    <div id="pp" style={{ width: '800px', height: '600px' }} />
                </div>
            </div>
        </div >
    );
}

export default Home;
