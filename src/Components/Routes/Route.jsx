import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./Header";
import Hogwarts from "../Hogwarts"
import Characters from "../Characters"
import Home from "../Home"
export default function Router(){

    return(
  
  
            <BrowserRouter>
             
             <Header rota="Home" rota2="Characters" rota3="Hogwarts"  />
             <Routes>
                <Route path="/" element={<Home/>}/>
              
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/hogwarts" element={<Hogwarts/>}/>
             </Routes>
          
          </BrowserRouter>
      
          

    );
}