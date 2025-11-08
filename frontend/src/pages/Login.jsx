import React, { useState, useContext } from 'react'
import Logo from "../assets/logo.png"
import google from '../assets/google.png'
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';
import Loading from '../component/Loading';
import { toast } from 'react-toastify';

function Login() {
  let [show, setShow] = useState(false)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { serverUrl } = useContext(authDataContext)
  let { getCurrentUser } = useContext(userDataContext)
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      let result = await axios.post(serverUrl + '/api/auth/login', { email, password }, { withCredentials: true })
      setLoading(false)
      getCurrentUser()
      navigate("/")
      toast.success("User Login Successful")
    } catch (error) {
      setLoading(false)
      toast.error("User Login Failed")
    }
  }

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email
      const result = await axios.post(serverUrl + "/api/auth/googlelogin", { name, email }, { withCredentials: true })
      getCurrentUser()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full min-h-screen bg-background text-foreground flex flex-col items-center justify-start'>
      <div className='w-full h-[80px] flex items-center px-8 gap-4 cursor-pointer' onClick={() => navigate("/")}>
        <img className='w-10' src={Logo} alt="OneCart Logo" />
        <h1 className='text-2xl font-bold'>OneCart</h1>
      </div>

      <div className='w-full h-[100px] flex flex-col items-center justify-center gap-2'>
        <span className='text-3xl font-bold'>Log in to Exclusive</span>
        <span className='text-base text-muted'>Enter your details below</span>
      </div>

      <div className='max-w-md w-11/12 bg-card border border-border rounded-lg shadow-sm p-8'>
        <form onSubmit={handleLogin} className='flex flex-col gap-6'>
          <div className='w-full h-[50px] bg-secondary border border-border rounded flex items-center justify-center gap-3 cursor-pointer hover:bg-border transition'
            onClick={googlelogin}>
            <img src={google} alt="Google Icon" className='w-5' />
            <span className='font-medium'>Sign in with Google</span>
          </div>

          <div className='flex items-center justify-center gap-4 text-sm text-gray-400'>
            <div className='flex-grow h-[1px] bg-gray-300'></div> OR <div className='flex-grow h-[1px] bg-gray-300'></div>
          </div>

          <div className='relative'>
            <input type="email" placeholder='Email or Phone Number' required
              className='w-full h-12 px-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-accent text-foreground'
              onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>

          <div className='relative'>
            <input type={show ? "text" : "password"} placeholder='Password' required
              className='w-full h-12 px-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-accent text-foreground'
              onChange={(e) => setPassword(e.target.value)} value={password} />
            {!show && <IoEyeOutline className='absolute right-4 top-3.5 cursor-pointer text-muted hover:text-foreground' onClick={() => setShow(true)} />}
            {show && <IoEye className='absolute right-4 top-3.5 cursor-pointer text-muted hover:text-foreground' onClick={() => setShow(false)} />}
          </div>

          <button type='submit' className='w-full h-12 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition flex items-center justify-center mt-2'>
            {loading ? <Loading /> : "Log In"}
          </button>
          <p className='text-center mt-4 text-sm'>Don't have account? <span className='text-accent font-medium cursor-pointer hover:underline' onClick={() => navigate("/signup")}>Sign up</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
