import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/layout/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Education from "./pages/Education";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/sign-in' element={<Signin/>}/>
                <Route path='/sign-up' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;