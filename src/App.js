import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./components/LandingPage";
import Cars from "./components/Cars";
import Contacts from "./components/Contacts";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      {/* <LandingPage /> */}

      {/* <Cars/> */}

      <Contacts />

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
