import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Information.css';
import AppContext from '../context/AppContext';

const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    //prettier-ignore
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment')
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
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
          <div className="information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item" key={item.title}>
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
