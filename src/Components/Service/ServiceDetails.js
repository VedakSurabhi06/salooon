import { useLocation, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const location = useLocation();
  const service = location.state;
  const navigate = useNavigate();
  console.log(service);

  return (
    <>
      <div className="service-main">
        <div className="service-image">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="service-content">
          <h1>{service.title}</h1>
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
            <i
              style={{ fontWeight: 'bold', fontSize: '20px' }}
              class="fa-solid fa-indian-rupee-sign"
            ></i>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '5px',
              }}
              className="rupee-text"
            >
              {service.rupees}
            </span>
          </div>
          <span style={{ color: 'gray' }}>Price inclusive of all taxes</span>
          <div className="button">
            <button onClick={() =>
            navigate('/' + service.title.replace(' ', '-') + '/appointment', {
              state: service,
            })
          }
            className="add">Make Appointment</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="service-desc">
        <h1>About This Service</h1>
        <div className="desc">
          <div className="desc-title">
            <h5>Service Description</h5>
          </div>
          {service.desc}
        </div>
      </div>
    </>
  );
};
export default ServiceDetails;
