// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import Typewriter from 'typewriter-effect';


// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";



export const Home = (): JSX.Element => {

  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="orangelets">
            <Typewriter
               onInit={(typewriter) => typewriter.typeString("Você sabia que a tecnologia quebra barreiras de outras áreas? ")
                .pauseFor(2500)
                .deleteAll()
                .typeString(" dev < front end /> ")
                .start()}
            />
              {" "}
            </Text>
            <Text type="body1" color="grey6">
            Minha relação com tecnologia começou aos 8 anos, quando ganhei meu primeiro video game. 
            Desde então, boa parte da minha vida foi dedicada a expandir meus conhecimentos na área tendo atuado com infraestrutura e 
            cursado Análise e desenvolvimento de sistemas. Após trabalhar no  serviço público com infraestrutura de TI por um tempo,
             voltei a me dedicar ao que mais gosto: desenvolvimento de software e  engenharia de software. Vejo uma pergunta comum em 
             entrevistas, formulários e afins: como eu posso contribuir com a sociedade por meio da tecnologia. Eu costumo dizer que nós
              desenvolvedores temos capacidade de ajudar outros setores da sociedade a quebrar barreiras e ir além. Nós estamos constantemente 
              solucionamos problemas em áreas da saúde, biologia, engenharias, finanças etc.  
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" color="brand1">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="icon" color="orangelets">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="orangelets">
            Conhecimentos:
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="orangelets">
                Quer me conhecer melhor?
              </Text>
              <Text as="p" type="body1" color="grey2">
                Na barra acima há ícones e que ao serem clicados redirecionam para minhas redes sociais e você 
                também pode baixar meu curriculo clicando no botão abaixo. 
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href="https://download1495.mediafire.com/r3piv5iknx5g/h5cxp56eu5havnh/cv+jose+duarte+frontend.docx" download
              >
                Download CV
               
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="heading2" color="orangelets" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="body1" color="white1">
                Esses são alguns dos projetos que colocam em prática fundamentos e recursos das tecnologias que aprendi
          
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
