import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const MainContent = styled.div`
    max-width: 1120px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        h1 {
            font-family: 'Baloo 2', cursive;
            font-size: 2.5rem;
            line-height: 50px;
        }
    }
`

export const SubText = styled.p`
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 600;
    font-size: 1rem;
`

export const SevicesSection = styled.div`
    gap: 0.8rem;
    margin-bottom: 1.1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
   
    span {
        border-radius: 999999px;
        padding: 0.5rem;
        background: ${(props) => props.theme['red-400']};

        display: flex;
        align-items: center;
    } 

    p {
        font-family: 'Baloo 2', cursive;
        font-weight: 600;
    }
    
`

export const SevicesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 3rem;
`

export const FooterContent = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
`