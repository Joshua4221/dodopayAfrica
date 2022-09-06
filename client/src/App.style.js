import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 500px) {
    height: unset;
  }
`;
