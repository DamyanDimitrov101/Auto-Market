import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./components/LandingPage";
import Cars from "./components/Cars";
import Contacts from "./components/Contacts";
import ErrorPage from './components/ErrorPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />


      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/Cars" component={Cars} exact />
        <Route path="/Contacts" component={Contacts} exact />
        <Route render={() => ErrorPage()}/>
      </Switch>

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
