import React from 'react';

import '../styles/components/Payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del Pedido:</h3>
        <div className="payment-button">Boton de pago con Paypal</div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default Payment;
