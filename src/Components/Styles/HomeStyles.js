import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      text-decoration: none;
     
    }
   
`;
export const Body = styled.body`
background-image: url('https://baixarpapeldeparede.com/web/wallpapers/wallpaper-hd-harry-potter-43/thumbnail/lg.jpg');  
background-repeat: no-repeat;
  background-size: cover;
   
  height:100vh;
  h1{
    padding-top:20vh;
    font-size:4vh;
  }
`;


