/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Theme } from "@mui/material";
import {
  AboutContainer,
  BoxContent,
  TitleBox,
  SectionResume,
  DividerContent,
  HrContent,
} from "./Sobre.style";

import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useContext } from "react";
import { DefaultTheme } from "styled-components/dist/types";
import { ThemeContext } from "styled-components";

export default function Sobre() {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);
  if (!theme) {
    return null;
  }

  return (
    <AboutContainer>
      <BoxContent>
        <SectionResume>
          <HrContent>
            <Brightness1Icon
              fontSize="inherit"
              sx={{
                color:
                  theme?.title === "dark"
                    ? `${theme.colors.primary}`
                    : `${theme?.colors.secondary}`,
              }}
            />
            <DividerContent
              theme={theme as Theme & DefaultTheme}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </HrContent>
          <TitleBox theme={theme as Theme & DefaultTheme}>
            <Box fontSize={"32px"} marginTop={"-16px"}>
              <h1> Sobre mim</h1>
            </Box>
            <h3>
              Meu nome é Luan Moura moro no Rio de Janeiro sou desenvolvedor
              Full Stack, especializado em desenvolvimento web utilizando as
              principais tecnologias do mercado, como React, JavaScript , Node,
              TypeScript e SQL.
              <br /> <br />
              Tenho em meu portfólio diversos projetos práticos, incluindo a
              criação de e-commerce, landing pages e aplicações web para
              otimização de tempo .
              <br /> <br />
              Atuei em diversas empresas nacionais e multinacionais na área de
              administração, hoje administro um condomínio de médio porte,
              gerenciando todo fluxo de processos administrativos e
              operacionais.
            </h3>
          </TitleBox>
        </SectionResume>
        <SectionResume>
          <HrContent>
            <Brightness1Icon
              fontSize="inherit"
              sx={{
                color:
                  theme?.title === "dark"
                    ? `${theme.colors.primary}`
                    : `${theme?.colors.secondary}`,
              }}
            />
            <DividerContent
              theme={theme as Theme & DefaultTheme}
              orientation="vertical"
              variant="middle"
              flexItem
            ></DividerContent>
          </HrContent>
          <TitleBox theme={theme as Theme & DefaultTheme}>
            <Box fontSize={"32px"} padding={"-13px"}>
              <h1>Formação</h1>
            </Box>
            <Box>
              <ul>
                <li>
                  <h2> Estacio </h2>
                  <h3 style={{ fontWeight: "500" }}>Período 2023.1 - 2025.2</h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    O Curso Superior em Ciência da Computação oferecido pela
                    Universidade Estácio é uma jornada abrangente e dinâmica que
                    proporciona aos alunos uma formação sólida e atualizada em
                    diversas áreas da computação. Ao longo de 2 anos e 5 meses.
                    Entre as habilidades aprendidas durante o curso estão: Entre
                    as habilidades aprendidas durante o curso estão: Arquitetura
                    de Computadores, Fundamentos de Redes de Computadores,
                    Desenvolvimento Web em HTML5, CSS, JavaScript e PHP, Banco
                    de Dados, Engenharia de Software, Sistemas Operacionais,
                    Programação Orientada a Objetos em Java, Inteligência
                    Artificial para Desenvolvedores.
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2>Labenu </h2>
                  <h3 style={{ fontWeight: "500" }}>Período 2023.1 - 2023.2</h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    Programa com mais de 1000 horas de experiência prática em
                    desenvolvimento Full-stack, guiadas por metodologias ágeis
                    (Kanban/Scrum). Entre as habilidades aprendidas durante o
                    curso estão HTML, CSS, JavaScript, React, Styled-Components,
                    React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex,
                    TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes
                    unitários e UI Design.
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2>Universidade Castelo Branco</h2>
                  <h3 style={{ fontWeight: "500" }}>Período 2016.1 - 2019.1</h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    Formação voltada a adminsitração de empresas guiada com
                    metodologias ágeis para acelerar o desenvolvimento de soft's
                    skills. Dentre as matérias importantes para ter sucesso no
                    mundo profissional, como gestão financeira, marketing,
                    recursos humanos, contabilidade, empreendedorismo, gestão
                    estratégica, logística, economia e ética empresarial.{" "}
                  </h3>
                </li>
              </ul>
            </Box>
          </TitleBox>
        </SectionResume>
      </BoxContent>
      <BoxContent>
        <SectionResume>
          <HrContent>
            <Brightness1Icon
              fontSize="inherit"
              sx={{
                color:
                  theme?.title === "dark"
                    ? `${theme.colors.primary}`
                    : `${theme?.colors.secondary}`,
              }}
            />
            <DividerContent
              theme={theme as Theme & DefaultTheme}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </HrContent>
          <TitleBox theme={theme as Theme & DefaultTheme}>
            <Box fontSize={"32px"} padding={"-13px"}>
              <h1>Expêriencias</h1>
            </Box>
            <Box>
              <ul>
                <li>
                  <h2> L.Moura WebSolution </h2>
                  <h3 style={{ fontWeight: "500" }}>
                    Dev Freelance Período set de 2023 - Atual
                  </h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    Desenvolvimento de sites para pequenas empresas feitos de
                    forma freelance através de uma agência digital. Principais
                    tecnologias, práticas e lib's : Javascript, React ,
                    MaterialUI ,Styled-Components ,ChackraUi , Typescript,
                    Node.Js,Knex ,Express, SqLite3, Express e POO.
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2>Condominio Reserva do Bosque</h2>

                  <h3 style={{ fontWeight: "500" }}>
                    Gerente administrativo - Período {">>"} nov de 2020 - abr de
                    2024
                  </h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    Cargo de liderança gerenciando todo pessoal
                    administrativamente e operacional, controle de estoque e
                    manutenções preventivas, corretivas. Analise de consumo de
                    água, luz, controle de qualidade sobre potabilidade
                    relacionado a água de poço artesiano, gestão de conflitos,
                    atendimento e acompanhamento técnico.
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2> Atento Brasil </h2>
                  <h3 style={{ fontWeight: "500" }}>
                    Atendimento ao Cliente - Período {">>"} fev de 2017 - mar de
                    2019
                  </h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    Atuando no setor de comunicação juntamente com vendas de
                    produtos relacionados a telecomunicação.
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2>GLS Engenharia</h2>
                  <h3 style={{ fontWeight: "500" }}>
                    Assistente administrativo - Período {">>"} fev de 2014 / mar
                    de 2015
                  </h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    Responsável pelo gerenciamento de pessoas ,suprimentos,
                    serviços extras dos colaboradores terceiros no contrato de
                    engenharia da empresa Dataprev .
                  </h3>
                </li>
                <br />
                <br />
                <li>
                  <h2>Procuradoria Geral do Estado PGE</h2>

                  <h3 style={{ fontWeight: "500" }}>
                    Estagiário de administração - Período {">>"} jan de 2013 /
                    fev de 2014
                  </h3>
                  <hr style={{ padding: "0" }} />

                  <h3 style={{ padding: "5px" }}>
                    {" "}
                    Responsável por toda por toda parte de arquivo, atendimento,
                    cadastro e pagamentos sobre benefícios de saúde e educação
                    para servidores públicos.
                  </h3>
                </li>
              </ul>
            </Box>
          </TitleBox>
        </SectionResume>
      </BoxContent>
    </AboutContainer>
  );
}
