import './Payment.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import {} from 'react-loader-spinner';
const Payment = ({ setPayment, appointment }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/success', { state: appointment });
    }, 2000);
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
                placeholder="Name of Card"
              />
              <input
                className="card-input"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{16,16}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
              ></input>
              <span class="expiration">
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  maxlength="2"
                  size="2"
                />
                <span>/</span>
                <input
                  type="text"
                  name="year"
                  placeholder="YY"
                  maxlength="2"
                  size="2"
                />
              </span>
              <input
                className="cvv-input"
                type="text"
                name="tel"
                placeholder="CVV"
                maxlength="3"
                minLength="3"
              />
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
      <div className="loader">
        {/* <ThreeDots height="100" width="100" color="grey" ariaLabel="loading" /> */}
      </div>
    </>
  );
};
export default Payment;
