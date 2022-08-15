import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
 

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DateAtual = styled.span`
    height: 42px;
    padding: 0rem 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['red-500']};

    font-family: 'Baloo 2', cursive;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 1rem;

    

`