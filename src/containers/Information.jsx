import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="information-buttons">
          <div className="information-back">Regresar</div>
          <div className="information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
