import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <footer className='footer' id='footerId'>
        {/* <About /> */}
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
