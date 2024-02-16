import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../stor/auth'

function Navbar() {
  const { auth } = useAuth()
  return (
    <div>
     <div className=''>
    <div className="  w-full text-gray-900 bg-gradient-to-br from-transparent to-purple-200">
      <nav className="flex justify-between items-center py-4 px-4 mx-auto max-w-screen-xl ">
        <button className="sidebar-open block md:hidden relative z-30 focus:outline-none transform  -translate-x-1/2 -translate-y-1/2 active:scale-75 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-open h-5 w-5 transform transition duration-500 ease-in-out"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-close hidden h-5 w-5 transform transition duration-500 ease-in-out"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <a href="" className="text-3xl md:text-4xl font-bold tracking-wide">
        Book-<span className="text-violet-600">Verse</span>
        </a>
        <div className="menu-resposive  fixed flex inset-0 transition-all bg-stone-400/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 flex-col md:flex-row md:space-x-8 -mt-56 md:mt-0 ">
        <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          <li className="text-lg md:text-base lg:text-lg font-medium group text-violet-600">
          <Link to="/page1" className="nav-link">Home</Link>
            <div className="h-0.5 bg-violet-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
          <li className="text-lg md:text-base lg:text-lg font-medium group">
          <Link to="/library" className="nav-link">Library</Link>
            <div className="h-0.5 bg-violet-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
          <li className="text-lg md:text-base lg:text-lg font-medium group">
          <Link to="/mycollection" className="nav-link">My Books</Link>
            <div className="h-0.5 bg-violet-600 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
        </ul>
        </div>
        <button>
<div>
<div className="relative">
  <input
    type="text"
    name="q"
    className="w-full border h-12 shadow p-4 rounded-full"
    placeholder="search"
  />
  <button type="submit">
    <svg
      className="text-fuchsia-800 font-bold h-5 w-5 absolute top-3.5 right-3 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      style={{ enableBackground: "new 0 0 56.966 56.966" }}
      xmlSpace="preserve">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
    </svg>
  </button>
</div>
</div>
     </button>
{
     <div className='flex flex-row items-center gap-3' >
    <p>Hello  {auth?.user?.username} </p>
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a><Link to="/" className="nav-link">Logout</Link></a></li>
      </ul>
    </div>
    </div>
    }
      </nav>
    </div>
  </div>
   </div>
  )
}

export default Navbar