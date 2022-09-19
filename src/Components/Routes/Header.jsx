import React,{useState} from "react";
import {Link} from  "react-router-dom";
import * as S from "../Styles/HeaderStyles";
import Logo from "../../Figures/Logo.png"
const Header =({rota,rota2,rota3})=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
              <S.Header>
                 <S.BoxMenuH>
                  <button onClick={()=>{setOpen(!open)}}>{open === true ? "x" : "≡"}</button>
                {open && (<nav>
                   <ul>
                   <li><Link to="/">{rota}</Link></li>
                    <li><Link to="/characters">{rota2}</Link></li>
                    <li><Link to="/hogwarts">{rota3}</Link></li>
                   
                    
                     
                      
                   </ul>
                   </nav>
               )}
               </S.BoxMenuH>
                <nav>
                <img src={Logo} alt=""/>
                
                <S.Ul>
                   <li><Link to="/">{rota}</Link></li>
                   <li><Link to="/characters">{rota2}</Link></li>
                   <li><Link to="/hogwarts">{rota3}</Link></li>
                  
                   
                   
                </S.Ul>
                </nav>
              
               
              </S.Header>
              
               

      );

};

export default Header;