import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <footer className='footer-main' id='footerId'>
        <Contacts />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
