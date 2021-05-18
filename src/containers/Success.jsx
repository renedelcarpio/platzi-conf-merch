import React, { useContext } from 'react';

import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="success">
      <div className="success-content">
        <h2>{`${buyer.name}, Gracias por tu compra!`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
