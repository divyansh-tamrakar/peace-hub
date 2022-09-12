import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import NavBar from './components/Navigation/NavBar';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Posts />
      <footer className='footer' id='footerId'>
        <About />
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
