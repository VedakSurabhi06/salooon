import './service.css';
import { Link, useNavigate } from 'react-router-dom';

const ServiceItem = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="info">
        <h3>{service.title}</h3>
        <div className="reviews">
          <div className="stars">
            <i className="star-icon fa-solid fa-star"></i>
            <span>{service.stars} stars </span>
          </div>
          <div className="review">
            <span>{service.reviews} reviews</span>
          </div>
        </div>
        <div>
          <i class="clock clock-icon fa-solid fa-clock"></i>
          <span className="minutes-text">{service.minutes} mins</span>
        </div>
        <div>
          <i class="rupee fa-solid fa-indian-rupee-sign"></i>
          <span className="rupee-text">{service.rupees}</span>
        </div>
        <hr />
        {service.descShort} <br />
        <Link to={'/' + service.title.replace(' ', '-')}>
          <span className="more">More Details </span>
        </Link>
      </div>
      <div className="button">
        <button
          onClick={() =>
            navigate('/' + service.title.replace(' ', '-') + '/appointment', {
              state: service,
            })
          }
          className="add"
        >
          Appointment
        </button>
      </div>
    </div>
  );
};
export default ServiceItem;
