import { Container } from '@/styles/Global'
import { Text } from '@/styles/Text'
import { Button } from '@/styles/Buttons'
import { Footer as FooterWrapper } from './style'
import { FaAngleUp } from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'

export const Footer = (): JSX.Element =>{
    return (
        <FooterWrapper>
            <Container>
                <Button onClick={() => { window.scrollTo(0,0) }} aria-label="Voltar para o topo do site" type="circle" color="orangelets"><FaAngleUp /></Button>
                <Text type="body1" color="orangelets">Feito em ReactJS</Text><FaReact size={32} color="#61dafb"/>
            </Container>
        </FooterWrapper>
    )
}