import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./components/LandingPage";
import Cars from "./components/Cars";
import MyProfile from "./components/MyProfile";
import Ask from "./components/Ask";
import Contacts from "./components/Contacts";
import CreateNewCar from "./components/MyProfile/ProfileInfo/CreateNewCar";
import CarInfo from "./components/Cars/CarsList/Car/CarInfo";
import ErrorPage from './components/ErrorPage';
import Notifications from './components/Notifications';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      {/* <Notifications type="danger" state={'closed'} message={'Be sad!'}/>
      <Notifications type="succes" state={'closed'} message={'Be happy!'}/> */}

      <Switch>
        <Route path="/" component={LandingPage} exact />
    
        <Route path="/Cars" component={Cars} exact />
        <Route path="/MyProfile" component={MyProfile} exact />
        <Route path="/Ask" component={Ask} exact />
        <Route path="/Contacts" component={Contacts} exact />
        <Route path="/CreateNewCar" component={CreateNewCar} exact />
        <Route path="/CarInfo/:id" component={CarInfo} exact />
        <Route render={() => ErrorPage()}/>
      </Switch>

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
