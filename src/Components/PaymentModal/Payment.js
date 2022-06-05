import './Payment.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
const Payment = ({ setPayment, appointment }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.nameError = 'Please enter your name';
    }
    if (!card) {
      errors.cardError = 'Please enter valid card';
    }
    if (!month || !year) {
      errors.dateError = 'Please select a valid date';
    }
    if (!cvv) {
      errors.cvvError = 'Please select cvv';
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate());
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/success', { state: appointment });
      }, 3000);
    }
  };
  console.log(appointment);
  return (
    <>
      <div className="back">
        <div className="payment-info">
          <i
            onClick={() => setPayment(false)}
            className="cross fa-solid fa-xmark"
          ></i>

          <form className="form">
            <img
              className="pay-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYY3Uz9Epy-FFD-0basOgTrXlciqI70nYahA&usqp=CAU"
              alt=""
            />
            <div className="form-items">
              <input
                className="name-input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name on Card"
                required
              />
              <p>{formErrors.nameError}</p>
              <input
                className="card-input"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{16,16}"
                autocomplete="cc-number"
                maxlength="19"
                value={card}
                onChange={e => setCard(e.target.value)}
                placeholder="xxxx xxxx xxxx xxxx"
              ></input>
              <p>{formErrors.cardError}</p>
              <span class="expiration">
                <input
                  type="text"
                  value={month}
                  onChange={e => setMonth(e.target.value)}
                  name="month"
                  placeholder="MM"
                  maxlength="2"
                  size="2"
                />
                <input
                  type="text"
                  name="year"
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  placeholder="YY"
                  maxlength="2"
                  size="2"
                />
              </span>
              <p>{formErrors.dateError}</p>
              <input
                className="cvv-input"
                type="text"
                name="tel"
                onChange={e => setCvv(e.target.value)}
                placeholder="CVV"
                maxlength="3"
                minLength="3"
              />
              <p>{formErrors.cvvError}</p>
              <button
                className="pay-button"
                type="submit"
                onClick={handleSubmit}
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className="loader">
          <ThreeDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
};
export default Payment;
