import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import Linkedin from '../../assets/imagens/linkedin.svg'
import Github from '../../assets/imagens/github.svg'
import Instagram from '../../assets/imagens/instagram.svg'
import Facebook from '../../assets/imagens/facebook.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <h5>Segundo desafio do Hiring Cords &emsp;|&emsp; Dayanne Alcantara</h5>
      <div className="redesSociais">
        <ul className="redesSociais_lista">
            <li className="redesSociais_lista_item">
                <Link >
                    <img src={Linkedin} alt="linkedin" />
                </Link>
            </li>
            <li clasName="redesSociais_lista_item">
                <Link >
                    <img src={Github }alt="github" />
                </Link>
            </li>
            <li className="redesSociais_lista_item">
                <Link >
                    <img src={Instagram} alt="instagram" />
                </Link>
            </li>
            <li className="redesSociais_lista_item">
                <Link >
                    <img src={Facebook} alt="facebook" />
                </Link>
            </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
