import React  from 'react'
import { Link } from 'react-router-dom';
const Pics = () => {
  

  return (
   <div>
    <div className=" mx-40 py-8 items-center grid grid-cols-5">
       <div   className= 'gap-'>
       <button>
       <img 
        className="  rounded-lg w-32 h-48 object-cover shadow-2xl " 
        src="https://booksondemand.ma/cdn/shop/products/ItEndswithUsbyColleenHoover_z-lib.org_2_1.jpg?v=1609449563" alt="" />
       <button className='ml-1 mt-3 font-bold'>It Ends With Us</button>
       <p className=' text-sm text-gray-400'>Collen Hover</p>
       </button>
       </div>
        <div  className= ' gap-6'>
        <button>
        <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://booksondemand.ma/cdn/shop/products/81tWhFdQroL-min.jpg?v=1631701461" alt="" />
        <button className='ml-1 mt-3 font-bold'>Shatter Me</button>
       <p className=' text-sm text-gray-400'>Tahereh Mafi</p>
        </button>
        </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://m.media-amazon.com/images/I/810pVhEvANL.AC_UF894,1000_QL80.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>As Good As Death</button>
       <p className=' text-sm text-gray-400'>Holly Jackson</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://m.media-amazon.com/images/I/61fOvj6bbgL.AC_UF1000,1000_QL80.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>The Cheat Sheet</button>
       <p className=' text-sm text-gray-400'>Sarah Adams</p>
       </button>
       </div>
       <div   className= 'gap-6'>
       <button>
       <img 
        className="  rounded-lg w-32 h-48 object-cover shadow-2xl " 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677175478i/116536542.jpg" alt="" />
       <button className='ml-1 mt-3 font-bold'>Things We Left Behind</button>
       <p className=' text-sm text-gray-400'>Lucy Score</p>
       </button>
       </div>
      </div>
     <div className=' flex justify-center'>
     <button 
      type="button"  
      class="  text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        <Link to="/library" className="nav-link">Show More</Link>
      </button>
     </div>
      </div>
  );

}

export default Pics