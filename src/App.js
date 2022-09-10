import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
