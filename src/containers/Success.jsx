import React from 'react';

import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="success">
      <div className="success-content">
        <h2>Nombre, Gracias por tu compra!</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
