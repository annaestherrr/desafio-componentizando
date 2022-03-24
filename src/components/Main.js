import React, {Component} from 'react';
import styled from "styled-components";
import topImage from "../assets/academia.jpg";
import acad1 from "../assets/img1.jpg";
import acad2 from "../assets/img2.jpg";
import acad3 from "../assets/img3.jpg";
import acad4 from "../assets/img4.jpg";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #B2DFEE;
`;

const Info = styled.div`
  width: 20rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: transparent;
  border-radius: 10px;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 0.7rem;
  background-color:#E0EEEE;
`;

const BoxButton = styled.div`
  display:flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  background-color: grey;
  height: 4rem;
  width: 8rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  font-size: 1rem;

  &:hover {
    height: 4rem;
    width: 8rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
`;

const TopImage = styled.img`
  width: 100%;
  height: 20rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  padding: 1rem;
  margin-top: 3rem;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  
`;

const About = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-top: 3rem;
 
`;

const FinalSentence = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const BoxImageAbout = styled.div`
  display: flex;
  justify-content: space-around;
 
`;

const ImageAbout = styled.img`
 height: 13rem;
 
`;

class Main extends Component {
    state = {
      isShowList: false,
      list:[],
      unidades: [
        {
            unidade:"Recreio dos Bandeirantes",
            endereço: "Rua Agenor Rabelo, n° 201"  
        },
        {
            unidade: "Centro",
            endereço: "Rua Gonçalves Dias, n° 56"
        },
        {
            unidade: "Barra da Tijuca",
            endereço: "Rua Ipanema, n° 13"
        },
       {
            unidade: "Laranjeiras",
            endereço: "Rua Rumania, n° 44"
       }
       
          ]
    }
  
    handleShowList = () => {
      this.setState({
        isShowList: !this.state.isShowList /* a exclamação é operador de negação - vai me retornar o contrário */
    })
    }
   
   renderList = () => (
     this.state.unidades.map((item) => (
      <li>
         <Info>
            <h2>Unidade: {item.unidade}</h2>
            <h2>Endereço: {item.endereço}</h2>
         </Info>
      </li>
            ))
     )
  
     render(){
        let {handleShowList} = this
        return(
            <Container>
              <div id="topo"><TopImage src={topImage} alt="Imagem de uma academia" /></div>
              <Title>Gym Space</Title>
              <Text>Venha cuidar do seu corpo e da sua mente com a gente. A academia Gym Space tem os melhores profissionais e equipamentos, venha nos fazer uma visita e veja como podemos te ajudar a cuidar de você! Que tal começar hoje um novo momento para sua vida? Deixe para trás o cansaço, as doenças e a insegurança e se transforme em uma pessoa mais saudável e alegre! A academia Gym Space chegou para te colocar para cima!</Text>
              <BoxImageAbout>
             <ImageAbout src={acad1} alt="Imagem de Academia"></ImageAbout>
             <ImageAbout src={acad2} alt="Imagem de Academia"></ImageAbout>
             <ImageAbout src={acad3} alt="Imagem de Academia"></ImageAbout>
             <ImageAbout src={acad4} alt="Imagem de Academia"></ImageAbout>
              </BoxImageAbout>
              <About id="about">QUEM SOMOS?</About>
              <Text>A Gym Space é referência desde 1995, quando iniciou sua atuação como Academia do Parque, se transformando posteriormente na atual Gym Space. São anos e de comprometimento do nosso TIME em melhorar a qualidade de vida, tanto física, quanto social e emocional de nossos alunos, ou melhor dizendo, amigos.
                    A Gym Space é reconhecida como uma academia família, temos pacotes incríveis para treinar com amigos, plano casal e muito mais! Temos como missão oferecer os melhores recursos e condições para que os clientes possam se relacionar com o exercício físico, buscando o comprometimento com a regularidade, a partir de uma prática eficaz, segura e prazerosa, visando ser uma referência em musculação e ginástica na cidade, primando pela excelência dos serviços prestados através do comprometimento de toda a sua equipe na busca da fidelização com seu cliente.
                    Venha fazer parte desta família você também!</Text>
                    <FinalSentence>Conheça uma das nossas unidades e deixa o nosso time cuidar de você!</FinalSentence>
              <BoxButton>
              <Button  onClick={handleShowList}> VER UNIDADES </Button>
              {this.state.isShowList && <ul >{this.renderList()}</ul>}
              </BoxButton>
            </Container>
        )
    }
}

export default Main