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
         

function App() {
  return (
    <main>
      <header>
        <div>
          <a href="https://playvalorant.com/pt-br/" target="_blank" rel="noreferrer">
            <img src={logo} alt="Valorant Logo"/>
          </a>
        </div>
        <h3>Riot Games</h3>
        <div><FiShare2 className='share'/></div>
      </header>
      <section>
        <div>
          <h1>Valorant</h1>
          <div className='container-heroes'>
            <div className='hero'>
              <img src={omen} alt="Valorant Character - Omen"/>
              <span>Omen</span>
            </div>
            <div className='hero'>
              <img src={sage} alt="Valorant Character - Sage"/>
              <span>Sage</span>
            </div>
            <div className='hero'>
              <img src={sova} alt="Valorant Character - Sova"/>
              <span>Sova</span>
            </div>
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
        <div>
          <img src={mainCharacter} alt="Main Valorant Character"/>
        </div>
      </section>
    </main>
  );
}

export default App;
