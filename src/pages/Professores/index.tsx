import Mapa from "../../assets/Mapa.svg"
import { Binoculars, ChatText, Clock, MicrosoftExcelLogo } from "phosphor-react";
import { MainContainer, MainContent, SevicesSection, SevicesContent, SubText, FooterContent } from "./style";
import { ProfessorContent } from "./components/TeacherContent";

export function Professores() {
    return (
        <>
            <MainContainer>
                <MainContent>
                    <div>
                        <h1>Encontre sua sala e seus professores <br />
                            a qualquer momento</h1>

                        <SubText>Com o gerenciador de sala você se informa,
                            ao onde estiver e a <br /> qualquer momento</SubText>

                        <SevicesContent>
                            <SevicesSection>
                                <span><MicrosoftExcelLogo size={24} /></span>
                                <p>Tenha um overview rapido</p>
                            </SevicesSection>

                            <SevicesSection>
                                <span><Binoculars size={24} /></span>
                                <p>Busca dinamica</p>
                            </SevicesSection>

                            <SevicesSection>
                                <span><Clock size={24} /></span>
                                <p>Informações em tempo real</p>
                            </SevicesSection>

                            <SevicesSection>
                                <span><ChatText size={24} /></span>
                                <p>Clique no card para mais info</p>
                            </SevicesSection>
                        </SevicesContent>
                    </div>

                    <img src={Mapa} alt="" />
                </MainContent>


            </MainContainer>

            <ProfessorContent />

            <FooterContent>
              
            </FooterContent>
        </>

    )
}