import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Mycollections from './Pages/Mycollections';
import Favourites from './Pages/Favourites';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Firstpage from './Pages/Firstpage';
import Library from './Pages/Library';
import Bookdetails from './Pages/Bookdetails';
import Addbook from './Components/Addbook';


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/mycollection" element={<Mycollections />} />
              <Route path="/favorites" element={<Favourites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/page1" element={<Firstpage/>}/>
              <Route path="/library" element={<Library/>}/>
              <Route path="/details/:id" element={<Bookdetails/>}/>
              <Route path="/add" element={<Addbook/>}/>
            </Routes>
         
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
