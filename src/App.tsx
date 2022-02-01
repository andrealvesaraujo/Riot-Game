import React from 'react';
import './App.scss';
import {FiShare2, FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi"
         
function App() {
  return (
    <main>
      <header>
        <div>
          {/* Logo */}
        </div>
        <div>Riot Games</div>
        <div><FiShare2/></div>
      </header>
      <section>
        <div>
          <h1>Valorant</h1>
          <div>
            <div>
              {/* Omem */}
            </div>
            <div>
              {/* Sage */}
            </div>
            <div>
              {/* Sova */}
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
          {/* Main Character */}
        </div>
      </section>
    </main>
  );
}

export default App;
