import React, { Component, useState, useEffect } from 'react';
// import './Appointment.css';
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Payment from '../PaymentModal/Payment';
import 'bootstrap';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import './appointment.css';

const Appointment = () => {
  const location = useLocation();
  console.log(location);
  const service = location.state;
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [serviceType, setServiceType] = useState(service.title);
  const [payment, setPayment] = useState(false);
  const validate = () => {
    let errors = {};

    if (!name) {
      errors.nameError = 'Please enter your name';
    }
    if (!date) {
      errors.dateError = 'Please select a valid date';
    }
    if (!time) {
      errors.timeError = 'Please select a valid time';
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate());
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  };

  return (
    <>
      <div className="appointment-main">
        <h1>{service.title}</h1>
        <form>
          <label>Name</label> <br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <p> {formErrors.nameError}</p>
          <label>Service</label> <br />
          <input type="text" value={serviceType} />
          <br />
          <label>Date</label> <br />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <p>{formErrors.dateError}</p>
          <label>Time</label> <br />
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <p>{formErrors.timeError}</p>
          <div className="button">
            <button onClick={handleSubmit} className="add">
              Make Appointment
            </button>
          </div>
        </form>
      </div>
      {isSubmit && Object.keys(formErrors).length === 0 ? (
        <Payment
          appointment={{ name, time, date, serviceType }}
          setPayment={setIsSubmit}
        />
      ) : null}
    </>
  );
};
export default Appointment;
