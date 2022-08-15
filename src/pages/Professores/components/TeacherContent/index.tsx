import { ChalkboardTeacher, GraduationCap, House, MagnifyingGlass } from "phosphor-react"
import { TeacherCard } from "../TeacherCard"
import { ButtonBuscar, CardContainer, FormContainer, LinkSection, TeacherCardContainer, TeacherContainer, TeacherContent } from "./style"

interface TeacherCardProps {
    id: number
    photo: string;
    name: string;
    description: string;
    ocupation: 'free' | 'inClass';
}

const teachers : TeacherCardProps[] = [
    {
        id: 1,
        photo: 'https://avatars.githubusercontent.com/u/94193637?v=4',
        name : 'Matheus Zacarias',
        description: 'React JS, Java, Styled-Components, Typescript',
        ocupation: 'free',
    },
    {
        id: 2,
        photo: 'https://avatars.githubusercontent.com/u/94193698?v=4',
        name : 'Kalebe Bezera',
        description: 'Java, Spring, JavaScript, React Native, Wordpress',
        ocupation: 'inClass'
    },
    {
        id: 3,
        photo: 'https://avatars.githubusercontent.com/u/93738072?v=4',
        name : 'Arthur Rosa',
        description: 'PHP, JavaScript, Java, React Native, Node.JS',
        ocupation: 'free'
    },
    {
        id: 4,
        photo: 'https://avatars.githubusercontent.com/u/72103222?v=4',
        name : 'Bruno Duarte',
        description: 'JavaScript, Java, CSS, React Native, Banco de dados',
        ocupation: 'free'
    },
    {
        id: 5,
        photo: 'https://avatars.githubusercontent.com/u/91213127?v=4',
        name : 'Matheus Oliveira',
        description: 'React Native, Tailwind, React JS, Java, Spring Boot',
        ocupation: 'inClass'
    },
    {
           id: 6,
        photo: 'https://avatars.githubusercontent.com/u/90568558?v=4',
        name : 'Gabriel Marques',
        description: 'Spring Boot, Java, React Native, JavaScript',
        ocupation: 'inClass'
    },
    {
        id: 7,
        photo: 'https://avatars.githubusercontent.com/u/94193936?v=4',
        name : 'Rubens Ribeiro',
        description: 'Java, Android, JavaScript, React JS, CSS',
        ocupation: 'free'
    },
    {
        id: 8,
        photo: 'https://avatars.githubusercontent.com/u/94194053?v=4',
        name : 'Paulo Simão',
        description: 'Android, Java, CSS, Banco de dados, JavaScript',
        ocupation: 'free'
    }
    
]

const summary = teachers.reduce(
    (acc, teacher) => {
        acc.total ++

        if(teacher.ocupation === 'free' ) {
            acc.free ++
            return acc
        } else {
            acc.inClass ++
            return acc
        }
       
    },
    {
        inClass : 0,
        free: 0,
        total: 0
    }
)


export function ProfessorContent() {
    return (
        <TeacherContainer>
            <TeacherContent>
                <h2>Nossos professores</h2>

                <CardContainer>
                    <article>
                        <div>
                            <p>Em aula</p>
                            <ChalkboardTeacher size={26} color='#A6263E'/>
                        </div>
                        <strong>{summary.inClass} professores</strong>
                    </article>

                    <article>
                        <div>
                            <p>Livre</p>
                            <House size={26} color='#A6263E' />
                        </div>
                        <strong>{summary.free} professores</strong>
                    </article>

                    <article>
                        <div>
                            <p>Total</p>
                            <GraduationCap size={26} color='#A6263E' />
                        </div>
                        <strong>{summary.total} professores</strong>
                    </article>
                </CardContainer>

                <FormContainer action="">
                    <input type="text" name="" id="" placeholder="Busque por professor, curso, ou sala" />
                    <ButtonBuscar>
                        <MagnifyingGlass size={23} />
                        Buscar

                    </ButtonBuscar>
                </FormContainer>


                <TeacherCardContainer>
                  {
                  teachers.map(teacher => {
                    return (
                    <TeacherCard 
                        key={teacher.id}
                        name={teacher.name}
                        description={teacher.description}
                        photo={teacher.photo}
                        ocupation={teacher.ocupation}
                    />
                    )
                  })}
                  
                </TeacherCardContainer>


                <LinkSection>
                    <h3>Busque por sala, e veja o cronograma completo</h3>
                    <a>Gerenciador de Salas</a>
                </LinkSection>

            </TeacherContent>



        </TeacherContainer>
    )
}