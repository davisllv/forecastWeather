import React from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(#ff8970, #ffa08b);
`;

const ContentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  min-width: 50%;
  min-height: 80%;
`;

const MainTitle = styled.h1`
  color: #fff;
  margin: 5rem 0;
  font-size: 3rem;
`;

const InputContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 4rem;
  border-bottom: 1px solid white;
`;

const InputComponent = styled.input`
  padding: 1rem;
  width: 60%;
  border-radius: 4px;
  border: none;
  outline: none;
`;

function App() {
  return (
    <MainContainer>
      <ContentContainer>
        <MainTitle>Previsão do Tempo.</MainTitle>
        <InputContainer>
          <InputComponent placeholder="Insira o nome da cidade aqui" />
          <IoSearchOutline
            size={24}
            style={{
              position: "relative",
              left: "-32px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Oi davi")}
          />
        </InputContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
