import Home from './Components/Home/Home';
import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment';
import Service from './Components/Service/Service';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Registration';
import Success from './Components/Success/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:title/appointment" element={<Appointment />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:title" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />

          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
