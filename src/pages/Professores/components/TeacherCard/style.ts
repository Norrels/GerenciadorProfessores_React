import styled, { css } from "styled-components";

type TagContentProps = {
    variant : string;
}

export const TeacherCardContext = styled.article<TagContentProps>`
    width: 100%;
    background: ${(props) => props.theme['black-300']};
    border-radius: 6px 36px 6px 36px;
    margin-bottom: 3.5rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    transition: transform 0.3s;
    cursor: pointer;

    h3 {
        font-family: 'Baloo 2', cursive;
    }

    p {
        text-align: center;
        color: ${(props) => props.theme['white-400']};
        font-size: 0.938rem;
    }

    strong {
        font-family: 'Baloo 2', cursive;
    }

    img {
        margin-top: -5rem;
        height: 6rem;
        width: 6rem;
        border-radius: 999999px;
        border: 4px solid ${(props) => props.theme['background']};

        ${(props) => 
        props.variant === 'free' ? 
        css`
      outline: 2px solid ${(props) => props.theme['green-300']};
        `
        : css`
          outline: 2px solid ${(props) => props.theme['yellow-300']};
        
        `
     }   
    }

    &:hover {
        transform: scale(1.1);
    }
`



export const TagContent = styled.span <TagContentProps>`

    ${(props) => 
        props.variant === 'free' ? 
        css`
        color: ${(props) => props.theme['green-700']};
        background-color: ${(props) => props.theme['green-300']};
        `
        : css`
        color: ${(props) => props.theme['yellow-500']};
        background-color: ${(props) => props.theme['yellow-300']};
        
        `
        
    }

   

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.625rem;
    border-radius: 90px;
    padding: 0.1rem 1rem;
`
export const TextSala = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between; 
`