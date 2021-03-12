import styled from "styled-components";

export const StyledGridLayout = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 50px;
`;
