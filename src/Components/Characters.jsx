import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Styles/CharactersStyles";
export default function Characters() {
  const [harry, setHarry] = useState([]);

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters")
      .then((res) => {
        setHarry(res.data);
        console.log(harry);
      })
      .catch((error) => {
        console.log("desculpe nao conseguimos atender sua solicitação", error);
      });
  }, [harry]);

  return (
    <div>
        <S.BoxImages>
      {harry.slice(0, 24).map((item) => (
        <div>
            <img src={item.image} alt={item.name} />
        </div>
        
       
      ))}
        </S.BoxImages>
    </div>
  );
}
