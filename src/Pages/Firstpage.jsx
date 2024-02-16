import React from 'react'
import Navbar from '../Components/Navbar'
import Pics from '../Components/Pics'
import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <div>
      <Navbar/>
      <div className=' flex justify-between'>
       <div className=' ml-16 mt-16'>
       <h1 className=' text-6xl font-black'><p className='text-violet-600'>Share</p> your Favorite Books with Everyone</h1>
        <button 
      type="button"  
      class=" mt-12  text-white bg-violet-600 hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-violet-600 dark:hover:bg-purple-700 dark:focus:ring-violet-900">
        <Link to="/mycollection" className="nav-link">Click Here</Link>
      </button>
       </div>
      <img 
        className=' h-66'
        src="https://cdn.dribbble.com/users/410826/screenshots/2329392/media/02207d847e0f57319b003a4907d74eb3.png?resize=800x600&vertical=center"alt=""/>
      </div>
      <Pics/>
      </div>
  );
};
export default Firstpage
