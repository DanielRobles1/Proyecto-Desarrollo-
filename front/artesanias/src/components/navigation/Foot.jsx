import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <h5 className="mb-4">Conéctate con nosotros</h5>
        
        <div className="mb-4">
          <p>
            Teléfono: <a href="tel:+521234567890" className="text-white">+52 1 234 567 890</a>
          </p>
          <p>
            Email: <a href="mailto:contacto@artesaniasoaxaca.com" className="text-white">contacto@artesaniasoaxaca.com</a>
          </p>
        </div>

        <ul className="list-inline mb-4">
          <li className="list-inline-item">
            <button className="btn btn-link text-white" onClick={() => console.log('Política de Privacidad clicked!')}>
              Política de Privacidad
            </button>
          </li>
          <li className="list-inline-item">
            <button className="btn btn-link text-white" onClick={() => console.log('Términos de Servicio clicked!')}>
              Términos de Servicio
            </button>
          </li>
          <li className="list-inline-item">
            <button className="btn btn-link text-white" onClick={() => console.log('Contacto clicked!')}>
              Contacto
            </button>
          </li>
        </ul>

        <div className="mb-4">
          <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        <p className="mb-0">© 2024 Artesanías de Oaxaca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
