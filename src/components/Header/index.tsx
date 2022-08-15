import logo from '../../assets/logo.svg'
import { Moon, SunDim, SunHorizon } from 'phosphor-react'
import { format, getHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { DateAtual, HeaderContainer, HeaderContent } from './style'
import { isWithinInterval } from 'date-fns/esm'

const periodo = parseInt(format(new Date(), 'k'))

export function Header() {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                {periodo >= 6 && periodo < 12 ? (
                    <DateAtual>
                        <SunDim />
                        {format(new Date(), 'eeee', {
                            locale: ptBR
                        })}, manhã
                    </DateAtual>

                ) : (periodo >= 12 && periodo < 19) ? (
                    <DateAtual>
                         <SunHorizon />
                        {format(new Date(), 'eeee', {
                            locale: ptBR
                        })}, tarde

                    </DateAtual>

                ) : (
                    <DateAtual>
                        <Moon />
                        {format(new Date(), 'eeee', {
                            locale: ptBR
                        })}, noite

                    </DateAtual>
                )}



            </HeaderContent>

        </HeaderContainer>
    )
}