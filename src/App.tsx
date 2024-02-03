import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import api from "./services/api";

const flexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  ${flexContainer}
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  background-image: linear-gradient(#ff8970, #ffa08b);
`;
console.log();
const ContentContainer = styled.div`
  ${flexContainer
    .join("")
    .replace("justify-content: center;", "flex-direction: column; ")
    .split(" ")}
  border: 1px solid black;
  min-width: 50%;
  min-height: 80%;
`;

const MainTitle = styled.h1`
  color: #fff;
  margin: 4rem 0;
  font-size: 2.5rem;
`;

const InputContainer = styled.div`
  width: 70%;
  ${flexContainer}
  padding-bottom: 4rem;
  border-bottom: 1px solid white;
`;

const InputComponent = styled.input`
  padding: 1rem;
  width: 80%;
  border-radius: 4px;
  border: none;
  outline: none;
`;

const CapitalContainer = styled.div`
  margin-top: 2rem;
  width: 65%;

  > h2 {
    font-size: 1rem;
    color: #fff;
    margin-bottom: 2rem;
  }
`;

const CapitalTableContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
`;

const TableContainer = styled.table`
  font-weight: bold;

  > tr > th {
    padding: 0.75rem 0.5rem 0.5rem 0;
    font-size: 12px;
  }

  > tr > td {
    padding: 0.5rem 0.5rem 0.5rem 0;
    font-size: 14px;
  }

  > tr > td:last-child {
    padding-left: 12px;
  }
`;

function App() {
  const [nameCity, setNameCity] = useState("");

  const handleCallApiWeather = async () => {
    // const response = await api.get(
    //   `https://api.hgbrasil.com/weather?format=json-cors&key=00b8a5a2&city_name=${nameCity}`
    // );
    const response = await api.get("", {
      params: {
        city_name: nameCity,
      },
    });

    console.log(response);
  };
  return (
    <MainContainer>
      <ContentContainer>
        <MainTitle>Previsão do Tempo.</MainTitle>
        <InputContainer>
          <InputComponent
            placeholder="Insira o nome da cidade aqui"
            value={nameCity}
            onChange={(event) => {
              setNameCity(event.target.value);
            }}
          />
          <IoSearchOutline
            size={24}
            style={{
              position: "relative",
              left: "-32px",
              cursor: "pointer",
            }}
            onClick={handleCallApiWeather}
          />
        </InputContainer>

        <CapitalContainer>
          <h2>Capitais</h2>

          <CapitalTableContainer>
            <TableContainer>
              <tr>
                <th>Min</th>
                <th>Max</th>
                <th></th>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
            </TableContainer>
            <TableContainer>
              <tr>
                <th>Min</th>
                <th>Max</th>
                <th></th>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
              <tr>
                <td>10º</td>
                <td>15º</td>
                <td>Porto Alegre</td>
              </tr>
            </TableContainer>
          </CapitalTableContainer>
        </CapitalContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
