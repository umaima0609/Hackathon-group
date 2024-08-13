import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Select } from "antd"
import { toast } from "react-hot-toast"
import { ThreeDots } from "react-loader-spinner"
import lottie from 'lottie-web';
import animationData from "./react.json"
import { Link, useNavigate } from 'react-router-dom'
const Option = Select


const Signup = () => {

  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [Password, setpassword] = useState("")
  const [rollnum, setrollnum] = useState("")
  const [phone, setphone] = useState("")
  const [loader, setloader] = useState(false)
  



  const shifts = async () => {
    const { data } = await axios.get("https://vercel-zpzg.vercel.app/api/v1/shifts")
    console.log(data)
    setshifts(data.shifts)
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloader(true)

    // if (dept === "" || sem === "") {
    //   toast.error("Please fill all fields");

    // }
    if (Password.length !== 8) {
      toast.error("Password  size should be 8 letters");
    }
    try {
      setloader(true)
      const { data } = await axios.post("https://vercel-zpzg.vercel.app/api/v1/register", {
        name: name,
        email: email,
        rollnum: rollnum,
        password: Password,
        phone: phone,
        
      });
      console.log(data)
      if (data.success) {
        toast.success("Registration Successfully ! ", {
          autoClose: 2000,

        })
        setloader(false)
        navigate("/login")
      }
      else {
        toast.error("user already exist", {
          autoClose: 2000,
        })
        setloader(false)
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, {
          autoClose: 2000,
        });
        setloader(false)
      } else {
        toast.error("An error occurred:", error.message);
        setloader(false)
      }
    }

  }

  
  useEffect(() => {

    
    shifts();
    const anim = lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, 
    });
    return () => anim.destroy(); 
  }, []);






  return (
    <div className='flex h-screen'>

      <div className='hidden sm:flex justify-center items-center w-1/2'>
        <div id="lottie-container" style={{ width: '800px', height: '600px' }} />
      </div>

      <div className='flex flex-col w-[100%] sm:w-1/2 justify-center items-center'>

        <form className='w-full px-6 md:px-[20vh]' onSubmit={handlesubmit}>

          <h1 className='text-center text-2xl font-bold text-blue-700'>Signup</h1>
          {loader ? <section className='flex justify-center items-center'>
            <ThreeDots size={23} color='blue' />
          </section> :
            <>
            </>}
          <input type='text' required placeholder='Name ' className='w-full p-2 border-2 mt-5 my-2 rounded-2xl'
            value={name} onChange={(e) => setname(e.target.value)} />
          <input type='email' required placeholder='Enter Email' className='w-full p-2 border-2  my-2 rounded-2xl'
            value={email} onChange={(e) => setemail(e.target.value)} />
          <input type='password' required placeholder='Enter Password ' className='w-full p-2 border-2 my-2 rounded-2xl'
            value={Password} onChange={(e) => setpassword(e.target.value)} />
          <input type='rollnumber' required placeholder='Enter Roll number' className='w-full p-2 border-2 rounded-2xl my-2 '
            value={rollnum} onChange={(e) => setrollnum(e.target.value)} />
          <input type='number' required placeholder='Enter Phone ' className='w-full p-2 border-2 rounded-2xl '
            value={phone} onChange={(e) => setphone(e.target.value)} />

     
          <input type='submit' className='w-[100%] bg-blue-700 border-2 rounded-2xl  p-2 mt-6 text-white' />
          <h1 className='text-center mt-2 font-semibold'>Already Registered ? <Link to="/login" className='text-blue-800'>Sign in Here</Link></h1>
        </form>
      </div>
    </div>
  )


}

export default Signup
