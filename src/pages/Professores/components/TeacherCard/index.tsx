import { Phone } from "phosphor-react";
import { TagContent, TeacherCardContext, TextSala } from "./style";

interface TeacherCardProps {
    name: string;
    description: string;
    photo: string;
    ocupation: 'free' | 'inClass'
}

export function TeacherCard( {name, description, photo, ocupation}: TeacherCardProps)   {
    return (
        <TeacherCardContext variant={ocupation}>
                <img src={photo} alt="" />

                <TagContent variant={ocupation}>{ocupation === 'free' ? 'EM AULA' : 'LIVRE'}</TagContent>
                <h3>{name}</h3>
                <p>{description}</p>
            
                <TextSala>
                    <p>Agora</p>
                    <strong>LAB-15</strong>
                </TextSala>

                <TextSala>
                    <p>Depois</p>
                    <strong>SALA-12</strong>
                </TextSala>
        </TeacherCardContext>

    )
}