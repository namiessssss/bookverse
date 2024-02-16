import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (   
    <div className=" bg-slate-50 relative flex flex-col bg-clip-border top-0 rounded-xl  text-gray-700 h-[calc(100vh-2rem)] w-full overflow-y-auto max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 over">
      
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
        Book-<span className="text-stone-400">Verse</span>        </h5>
      </div>
      <nav className="flex flex-col gap-1 p-2 font-normal text-gray-700">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/mycollection" className="nav-link">My Collections</Link>
        <Link to="/favorites" className="nav-link">Favourites</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
