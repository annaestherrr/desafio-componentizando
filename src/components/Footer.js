import React, {Component} from 'react';
import styled from "styled-components";

import Insta from "../assets/instagram-logo.png";
import Face from "../assets/logo-face.jpg";


const Logo = styled.img`
height: 1.5rem;
margin-left: 0.5rem;
`;

const BoxFooter = styled.div`
background-color: #000;
display: flex;
justify-content: center;
font-size: 1.7rem;
padding: 2rem;
color: #fff;
`;


const SocialNetworks = styled.p`
margin-left: 8rem;
`;


class Footer extends Component {

   render(){
      return(
        <BoxFooter id="end">
         <p>Contato: (21) 1234-56789</p>
        <SocialNetworks>Redes Sociais:</SocialNetworks>
         <a href="https://www.instagram.com/"><Logo  src={Insta} alt="Logo do Instagram"/></a>
         <a href="https://www.facebook.com/"><Logo src={Face} alt="Logo do Facebook"/></a>
        </BoxFooter>
      )
   }
}

export default Footer