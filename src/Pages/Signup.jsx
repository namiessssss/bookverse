import React, { useState } from 'react'
import { useAuth } from '../stor/auth';
import axios from 'axios';


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { connexion } = useAuth()
  const signUp = async (e) => {
    e.preventDefault()
    try {
        const res = await axios.post('http://localhost:4000/auth/register', {
           username,
            email,
            password
        })
        if(res.data.email) {
            alert('welcome')
            
        }
        else {
            alert('email or passowrd wworng')
        }
    } catch (err) {
        console.log(err)
        alert('something went wrong')
    }
}
  return (
         <div>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <a href="" className=" flex justify-center items-center text-3xl md:text-4xl font-bold tracking-wide">
        Book-<span className="text-violet-600">Verse</span>
        </a>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Create a new account
    </h2>
  </div>
  <div className=" bg- mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
    <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
          
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            required=""
            onChange={e=>setUsername(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required=""
            onChange={e=>setEmail(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required=""
            onChange={e=>setPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md text-white bg-violet-400 mr-4 hover:bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={signUp}
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
         </div>
  )
}

export default Signup