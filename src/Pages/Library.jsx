import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Library = () => {
 
  const [image, setImage]= useState('')
  const [title, setTitle]= useState('')
  const [writer, setWriter]= useState('')
  const [book, setBook]=useState([])

const addBook = async () => {
    const res = await axios.post("http://localhost:4000/books/add", {
      image,
      title,
      writer,
    })
    console.log(res.data)
  }
  const getBook =async () =>{
    const res = await axios.get("http://localhost:4000/books/") 
    console.log(res.data)
    setBook(res.data)
  }
  useEffect(() => {
    getBook()
}, []);
  return (
    <div>
      <Navbar/>
      <div className=" mx-6 py-8 gap-8 grid grid-cols-7">
       <div   className= 'gap-6'>
       <button>
       <Link to={"/details/2"} >
       <img 
        className="  rounded-lg w-32 h-48 object-cover shadow-2xl " 
        src="https://booksondemand.ma/cdn/shop/products/ItEndswithUsbyColleenHoover_z-lib.org_2_1.jpg?v=1609449563" alt="" />
       </Link>
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
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://assets.vogue.in/photos/63c4f6cf7f1659176630545e/master/w_1600%2Cc_limit/The%2520Half%2520Moon%2520.jpeg" alt="" />
        <button className='ml-1 mt-3 font-bold'>The Half Moon</button>
       <p className=' text-sm text-gray-400'>Mary Beth Keane</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661354811l/61683285.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>Home Coming</button>
       <p className=' text-sm text-gray-400'>Kate Morton</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687803098i/61771675.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>Hello Beautiful</button>
       <p className=' text-sm text-gray-400'>Ann Morianto</p>
       </button>
       </div>
      </div>
      <div className=" mx-6 py-8 gap-8 grid grid-cols-7">
       <div   className= 'gap-6'>
       <button>
       <img 
        className="  rounded-lg w-32 h-48 object-cover shadow-2xl " 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677175478i/116536542.jpg" alt="" />
       <button className='ml-1 mt-3 font-bold'>Things We Left Behind</button>
       <p className=' text-sm text-gray-400'>Lucy Score</p>
       </button>
       </div>
        <div  className= ' gap-6'>
        <button>
        <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1637932988i/53138101.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>What Doesn't Kill You</button>
       <p className=' text-sm text-gray-400'>Tessa Miller</p>
        </button>
        </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://m.media-amazon.com/images/I/91LiWpfwUKL._AC_UF1000,1000_QL80_.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>The Diamond Eye</button>
       <p className=' text-sm text-gray-400'>Kate Queen</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://m.media-amazon.com/images/I/71PNGYHykrL._AC_UF1000,1000_QL80_.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>It Starts with Us</button>
       <p className=' text-sm text-gray-400'>Collen Hover</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://m.media-amazon.com/images/I/81GH1vHKxBL._SL1500_.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>The Secrets of Blythswood Square</button>
       <p className=' text-sm text-gray-400'>Mary Beth Keane</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696972364i/127282597.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>Green Dot</button>
       <p className=' text-sm text-gray-400'>Madeleine Gray</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://booksondemand.ma/cdn/shop/products/Atomichabits-min.jpg?v=1631701304" alt="" />
        <button className='ml-1 mt-3 font-bold'>Atomic Habits</button>
       <p className=' text-sm text-gray-400'>James Clear</p>
       </button>
       </div>
      </div>
      <div className=" mx-6 py-8 gap-8 grid grid-cols-7">
       <div   className= 'gap-6'>
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
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://assets.vogue.in/photos/63c4f6cf7f1659176630545e/master/w_1600%2Cc_limit/The%2520Half%2520Moon%2520.jpeg" alt="" />
        <button className='ml-1 mt-3 font-bold'>The Half Moon</button>
       <p className=' text-sm text-gray-400'>Mary Beth Keane</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661354811l/61683285.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>Home Coming</button>
       <p className=' text-sm text-gray-400'>Kate Morton</p>
       </button>
       </div>
       <div className= ' gap-6'>
       <button>
       <img 
        className="rounded-lg w-32 h-48 object-cover shadow-2xl" 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687803098i/61771675.jpg" alt="" />
        <button className='ml-1 mt-3 font-bold'>Hello Beautiful</button>
       <p className=' text-sm text-gray-400'>Ann Morianto</p>
       </button>
       </div>
      </div>
      <div className=" mx-6 py-8 gap-8 grid grid-cols-7">
       
      </div>
    </div>
  )
}

export default Library