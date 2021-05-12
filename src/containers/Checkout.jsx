import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout-content">
        <h3>Lista de Pedidos</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type='button'>
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
      </div>
      <div className="checkout-sidebar">
        <h3>Precio total: $10</h3>
        <Link to='/checkout/information'>
          <button type='button'>Continuar Pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
