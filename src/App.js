import './App.css';
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
      <Contacts />
    </div>
  );
}

export default App;
