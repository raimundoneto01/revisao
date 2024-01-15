import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { Textcpf } from "../../components/TextCpf";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    
      <div>
        <h1>Hellow word</h1>
          <Text textValue='teste  123'/>
          <Textcpf cpf="01234567890"/>
          <Link to="about">About Us</Link>
         <button onClick={() => navigate("/about")}>Página sobre</button>
      </div>
   
  );
}
