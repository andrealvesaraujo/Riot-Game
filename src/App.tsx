import React from 'react';

import './App.scss';
import "./fonts/Druk Wide Bold.ttf";
import "./fonts/OpenSans-Bold.ttf";
import "./fonts/OpenSans-Regular.ttf";

import logo from './img/Logo.svg'
import omen from './img/Omen.svg'
import sage from './img/Sage.svg'
import sova from './img/Sova.svg'
import mainCharacter from './img/main-character.png'

import {FiShare2, FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi"


import { Hero } from './components/Hero';
         

function App() {

  const handleShareInfo = () => {
    navigator.share({
      title: document.title,
      text: "Meu Projeto em React do Site do Valorant - Andre Alves de Araújo",
      url: window.location.href
    })
    .then(() => console.log('Successfully shared! <3'))
    .catch((error) => console.log('Oh oh! Something went wrong:', error));
  }

  return (
    <main>
      <header>
        <div>
          <a href="https://playvalorant.com/pt-br/" target="_blank" rel="noreferrer">
            <img className="logo" src={logo} alt="Valorant Logo"/>
          </a>
        </div>
        <h3>Riot Games</h3>
        <div>
          <FiShare2 
            className='share'
            onClick={()=>handleShareInfo()}
          />
        </div>
      </header>
      <section>
        <div className='content'>
          <h1>Valorant</h1>
          <div className='container-heroes'>
            <Hero img={omen} alt={"Valorant Character - Omen"} name={"Omen"}></Hero>
            <Hero img={sage} alt={"Valorant Character - Sage"} name={"Sage"}></Hero>
            <Hero img={sova} alt={"Valorant Character - Sova"} name={"Sova"}></Hero>
          </div>
          <footer>
            <div>
              <a href="https://www.instagram.com/valorantbrasil/?hl=pt-br" target="_blank" rel="noreferrer"  >
                <FiInstagram />
              </a> 
            </div>
            <div>
              <a href="https://twitter.com/playvalorant" target="_blank" rel="noreferrer"  >
                <FiTwitter />
              </a> 
            </div>
            <div>
              <a href="https://pt-br.facebook.com/VALORANTbrasil/" target="_blank" rel="noreferrer"  >
                <FiFacebook />
              </a> 
            </div>
          </footer>
        </div>
        <div className="container-main-character">
          <img src={mainCharacter} alt="Main Valorant Character"/>
        </div>
      </section>
    </main>
  );
}

export default App;
