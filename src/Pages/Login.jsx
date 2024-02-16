import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from '../stor/auth'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  const login = async (e) => {
      e.preventDefault()
      try {
          const res = await axios.post('http://localhost:4000/auth/login', {
              email,
              password
          })
          if(res.data.token) {
              alert('welcome')
              signIn(res.data.token, res.data.user)
              navigate("/page1")
          }
          else {
              alert('email or passowrd wworng')
          }
      } catch (err) {
          console.log(err)
          
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
      Sign in to your account
    </h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required=""
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
onChange={e=>setEmail(e.target.value)}          />
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
          
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required=""
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <div className="text-sm">
            <a
              href="#"
              className="font-semibold  text-violet-600 hover:text-violet-400"
            >
              <Link to="/signup" className="nav-link"> create new account</Link>
            </a>
          </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md  text-white bg-violet-400 mr-4 hover:bg-violet-600  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={login}
        >
          Login
         </button>
      </div>
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a
        href="#"
        className="font-semibold leading-6 text-violet-600 hover:text-violet-400"
      >
        Start a 14 day free trial
      </a>
    </p>
  </div>
</div>

    </div>
  )
}

export default Login