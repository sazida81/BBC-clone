import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo from '../assets/logo.png'
import { auth } from '../firebase/setup';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
        
    const nevigate = useNavigate();

    const logout = async()=>{
        try{
            await signOut(auth)
            nevigate("/")
        }catch(err){
            console.error(err)
        }
    }
 
  return (
    <div className='grid grid-cols-3 bg-black text-white'>

       <div className='flex p-2'>
            <img src={logo} className='h-10' />
            {auth.currentUser ? <button onClick={logout}
            className='text-white hover:border border-white
            p-2'>Logout</button> : 
            <Link to="/signin">
          <button className='text-white hover:border border-white
            p-2 w-48 flex gap-2 mb-2'>
                <FaUser className='h-7'/>
                <h2 className='mt-1'>Sign in</h2>
            </button>
            </Link>
             }
        </div>  

      <div className='flex'>
        
        <button className='font-semibold text-sm '>
            Home
        </button>

        <button className='ml-7 font-semibold text-sm '>
            News
        </button>

        <button className='ml-7 font-semibold text-sm '>
             Election
        </button>

        <button className='ml-7 font-semibold text-sm '>
            Sport
        </button>

        <button className='ml-7 font-semibold text-sm '>
            Business
        </button>

        <button className='ml-7 font-semibold text-sm '>
            Innovation
        </button>

        <button className='ml-7 font-semibold text-sm '>
            Culture
        </button>

        <button className='ml-7 font-semibold text-sm '>
            Arts
        </button>

      </div>

      <div className='flex p-4'>
        <button className='ml-60 flex gap-2'>
            <IoSearchSharp className='h-6'/>
            Search BBC</button>
      </div>



    </div>
  )
}

export default Navbar
