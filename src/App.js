import React from "react";
import Router from "./Components/Routes/Route";
import * as S from "./Components/Styles/AppStyles";
import { GlobalStyle } from "./Components/Styles/HeaderStyles";
const App = () => {
  return (
    < S.BOX>
      <GlobalStyle/>
      <Router />
    </S.BOX>
  );
};

export default App;
