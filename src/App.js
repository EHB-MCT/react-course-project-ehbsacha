import logo from './img/LekkerVanBijOnsLogo.png';
import './App.css';
import Filter from './components/Filter.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <div>
        <Navigation logo={logo} />
        <Filter type="iets" />
      </div>
      <div className="appFooter">
        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default App;
