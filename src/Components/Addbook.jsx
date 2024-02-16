import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Addbook = () => {
  const [image, setImage]= useState('')
  const [title, setTitle]= useState('')
  const [writer, setWriter]= useState('')
  const [pdf, setPdf] = useState('')
  const [book, setBook]=useState([])

const addBook = async () => {
    const res = await axios.post("http://localhost:4000/book/add", {
      image,
      title,
      writer,
      pdf
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
     
  <div>
 <div className='  mt-10 mx-10 ' >
 <h1 className=' mb-5 text-2xl font-black text-violet-400'>Add your Book</h1>
  <input
    className="mb-5 block w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
    onChange={e => setImage(e.target.value)} placeholder='Image' type="text"
  />
  <input
    className="mb-5 block w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
    onChange={e => setTitle(e.target.value)} placeholder='Title' type="text"
  />
  <input
    className="mb-5 block w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
    onChange={e => setWriter(e.target.value)} placeholder='Writer' type="text"
  />

  <input className="mb-5 block w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
            type="file"
            placeholder="add a book"
            onChange={e => setPdf(e.target.files[0])}/>

  <button
    type="button"
    onClick={addBook}
    className="inline-block px-6 py-2.5 bg-violet-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-600 hover:shadow-lg "
  >
    Submit
  </button>
 </div>
</div>
<div>
{ 
        book.map(b => (
          <Link key={b._id} to={`/addBook/${b._id}`}>
            <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
              <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                      <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                        <img
                          src={b.image}
                          alt=""
                          className="object-cover w-full lg:h-full "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                      <div className="mb-8 ">
                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                          {b.title}
                        </h2>
                      </div>
                      <div className="flex flex-wrap items-center -mx-4 ">
                        <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                          <button className="flex items-center justify-center w-full p-4 text-fuchsia-600 border border-fuchsia-600 rounded-md dark:text-gray-200 dark:border-fuchsia-700 hover:bg-fuchsia-700 hover:border-fuchsia-700 hover:text-gray-100 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 dark:hover:text-gray-300">
                            <Link to="/favorites" className="nav-link">Add to favorites</Link>
                          </button>
                        </div>
                        <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                          <button className="flex items-center justify-center w-full p-4 text-fuchsia-600 border border-fuchsia-600 rounded-md dark:text-gray-200 dark:border-fuchsia-700 hover:bg-fuchsia-700 hover:border-fuchsia-700 hover:text-gray-100 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 dark:hover:text-gray-300">
                            Download Pdf
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Link>
        ))
      }
</div>

</div>
  )
}

export default Addbook