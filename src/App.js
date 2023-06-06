import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import BookingForm from './components/BookingForm';

let MainComponent = () =>{
  return(
  <>
    <Header/>
    <Main/>
  </>
  )
}

function App() {
  return (
    <>
      <Nav/>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainComponent/>} />
          <Route exact path="/booking" element={<BookingForm/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
