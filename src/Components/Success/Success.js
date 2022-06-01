import { useLocation } from 'react-router-dom';
const Success = () => {
  const location = useLocation();
  const appointment = location.state;
  console.log(appointment);
  return <div>Success</div>;
};
export default Success;
