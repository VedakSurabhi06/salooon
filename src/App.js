import Home from './Components/Home/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment';
import Service from './Components/Service/Service';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Registration';
import Success from './Components/Success/Success';
import ServiceDetails from './Components/Service/ServiceDetails';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:title/appointment" element={<Appointment />} />
          <Route path="/:title/appointment/success" element={<Success />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:title" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
