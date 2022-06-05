import { useLocation } from 'react-router-dom';
import './success.css';
const Success = () => {
  const location = useLocation();
  const appointment = location.state;

  return (
    <div className="success-main">
      <div className="success-content">
        <h1>Your Appointment has been scheduled successfully</h1>
        <p>
          Your Appointment no. is #
          {Math.floor(Math.random() * (100000000 - 10000000 + 1) + 1)}
        </p>
        <p>
          Your appointment is successfully scheduled at {appointment.time} on
          {appointment.date} for {appointment.serviceType}
        </p>
        <div className="gif">
          <img
            src="https://c.tenor.com/VgCDirag6VcAAAAj/party-popper-joypixels.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Success;
