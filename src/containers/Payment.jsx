import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';

import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'Aei1wg0SjGtlNvSM68wqxQElmlWvmCua0iMst6ArG8sfaccnakP3X24uKiqeoMiYB00QPiys__5PQQDC',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del Pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default Payment;
