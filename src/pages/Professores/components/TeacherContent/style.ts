import styled from "styled-components";

export const TeacherContainer = styled.section`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const TeacherContent = styled.div`
    max-width: 1120px;
    width: 100%;

    margin-top: 7rem;
`

export const  CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    article {
        border-radius: 8px;
        margin-top: 3rem;
        padding: 2rem 2rem;
        background: ${(props) => props.theme['black-300']};

        display: flex;
        gap: 1rem;
        flex-direction: column;
       
        div {
            display: flex;
            justify-content: space-between;

            p {
                font-family: 'Roboto', sans-serif;
            }
        }

        strong {
            font-family: 'Baloo 2', cursive;
            font-size: 1.3rem;
        }
    }
   
`

export const FormContainer = styled.form`
    max-width: 1120px;
    width: 100%;
    margin-top: 4rem;

    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: none;
        border-radius: 6px;
        padding: 1rem 2rem;
        color: ${(props) => props.theme['white-300']};
        background: ${(props) => props.theme['black-800']};
     
        &:focus {
            outline: 1px solid ${(props) => props.theme['red-500']};
        }
    }

`

export const ButtonBuscar = styled.button`
    background-color: transparent;
    border: 2px solid ${(props) => props.theme['red-400']};
    border-radius: 8px;
    color: ${(props) => props.theme['red-400']};
    padding: 1rem;
    
    display: flex;
    align-items: center;
    gap: 0.6rem;

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    cursor: pointer;

    &:hover {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        background-color: ${(props) => props.theme['red-400']};
        color: ${(props) => props.theme.white};
    }
`

export const TeacherCardContainer = styled.section`
    width: 100%;
    margin-top: 6.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`

export const LinkSection = styled.section`
    width: 100%;
    margin: 4rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    flex-direction: column;
    
    a {
        background-color: ${(props) => props.theme['red-400']};
        padding: 1rem 2rem;
        border-radius: 90px;
        
        font-family: 'Baloo 2', cursive;
        font-weight: 600;

        cursor: pointer;
      

        &:hover {
            transition: background-color 0.2s, color 0.2s;
            background-color: ${(props) => props.theme['red-500']};
        }
    }
`