import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>SALOON SERVICES</h1>
          <h2>What are you waiting for ?</h2>
          <Link to="/service" className="btn-get-started scrollto">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
