import React, { Component, useState } from 'react';
// import './Appointment.css';
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Payment from '../PaymentModal/Payment';
import 'bootstrap';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';

const Appointment = () => {
  const location = useLocation();
  const service = location.state;
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [serviceType, setServiceType] = useState(service.title);
  const [payment, setPayment] = useState(false);
  // let appointmentDetails = {};

  const handleSubmit = e => {
    e.preventDefault();
    let appointmentDetails = {
      name,
      time,
      date,
      serviceType,
    };
    setPayment(true);
    console.log(appointmentDetails);
  };

  return (
    <>
      <div>
        <h1>{service.title}</h1>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <label>Service</label>
          <input type="text" value={serviceType} />
          <br />
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <br />
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <br />

          <div className="button">
            <button onClick={handleSubmit} className="add">
              Make Appointment
            </button>
          </div>
        </form>
      </div>
      {payment && (
        <Payment
          appointment={{ name, time, date, serviceType }}
          setPayment={setPayment}
        />
      )}
    </>
  );
};
export default Appointment;
