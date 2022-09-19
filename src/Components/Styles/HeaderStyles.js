import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      text-decoration: none;
       color:white;
    }
   
`;
export const Header = styled.header`
background-color:transparent;
position:fixed;
nav{
  display:flex;
align-items: center;
justify-content: space-around;
}

width:100%;


img{
 width:12vw;
 
 height:15vh;
}
@media  screen and (min-width: 360px) and (max-width: 480px){
  h1{
    display:none;
  }
  img{
   width:28vw;
 
   height:12vh;
  
   margin-right:20vw;
   margin-bottom:5vh;
}
}   

`;
export const BoxMenuH=styled.div`
      display:none;
      @media  screen and (min-width: 360px) and (max-width: 480px){
         display:flex;
         flex-direction: column;
  
          width:10vw;
          height:20vh;
          li{

              list-style: none;
              font-size:3vh;
              margin-top:1vh;
              
          }
          
          button{
            width:20vw;
            height:8vh;
            font-size:7vh;
           

            background-color:transparent;
            border:none;
          }
        
      }
`;

export const Ul = styled.ul`
   display:flex;
   align-items: center;
  justify-content: space-around;
 
  width:50%;
 
    list-style: none;
    font-size:4vh;
    
    @media  screen and (min-width: 360px) and (max-width: 480px){
      display:none;
     
    }   

`;