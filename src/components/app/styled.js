import styled, { keyframes } from "styled-components";
import main from "../../assets/img/main-background.jpg";
import { Spinner3 } from "@styled-icons/evil/Spinner3";

export const StyledPageWrapper = styled.div`
    background-image: url(${main});
`;

export const StyledContentWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    max-width: 1170px;
    min-height: 100vh;
    margin: 0 auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledGridLayout = styled.div`
    padding: 0 20px;
    width: 100%;
    column-count: 3;
    column-gap: 20px;
`;

export const StyledSpinner = styled(Spinner3)`
    color: #ff8f8f;
    display: block;
    margin: 20px auto;
    width: 50px;
    height: 50px;
    animation: ${rotate} 1s linear infinite;
`;

export const StyledGetMoreBtn = styled.button`
    width: 200px;
    display: flex;
    border: none;
    font-weight: 500;
    text-decoration: underline;
    outline: none;
    margin: auto;
    padding: 20px;
    background: none;
    cursor: pointer;
`;
