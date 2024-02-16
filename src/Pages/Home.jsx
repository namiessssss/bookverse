import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
            <div>
            <div className=" w-full text-gray-900 ">
      <nav className="flex justify-between items-center py-4 px-4 mx-auto max-w-screen-xl ">
        <a href="" className="text-3xl md:text-4xl font-bold tracking-wide">
        Book-<span className="text-fuchsia-800">Verse</span>
        </a>
        <div >
        <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          <li className="text-lg md:text-base lg:text-lg font-medium group text-fuchsia-800">
            <a href="">Home</a>
            <div className="h-0.5 bg-fuchsia-800 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
          <li className="text-lg md:text-base lg:text-lg font-medium group">
          <Link to="/signup" className="nav-link">Sign Up</Link>
            <div className="h-0.5 bg-fuchsia-800 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
          <li className="text-lg md:text-base lg:text-lg font-medium group">
            <Link to="/login" className="nav-link">Login</Link>
            <div className="h-0.5 bg-fuchsia-800 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
          </li>
        </ul>
        </div>
      </nav>
    </div>
    <div className='flex flex-col items-center justify-center h-[90vh] bg-gradient-to-t from-violet-300 to-white py-8 text-center'>
  <h1 className='text-8xl font-black mb-5'>Keep Reading</h1>
  <h2 className='font-bold'>"Every Book You Post, Teaches Someone Else To Read"</h2>
  <div className='my-14'>
    <button className='py-3 px-8 rounded-xl text-white bg-violet-400 hover:bg-violet-600'>
    <Link to="/login" className="nav-link">Explore More</Link>
    </button>
  </div>
       
</div>
     </div>
     <h1 className=''>Hello</h1>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n  body {\n    font-family: 'Poppins', sans-serif;\n  }\n"
      }}
    />
    </div>
  )
}

export default Home