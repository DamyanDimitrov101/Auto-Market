import { useReducer, useState } from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from "./components/Authentication/LoginPage";
import Logout from "./components/Authentication/Logout";
import RegisterPage from "./components/Authentication/RegisterPage";
import LandingPage from "./components/LandingPage";
import Cars from "./components/Cars";
import MyProfile from "./components/MyProfile";
import Ask from "./components/Ask";
import Contacts from "./components/Contacts";
import CreateNewCar from "./components/MyProfile/ProfileInfo/CreateNewCar";
import CarInfo from "./components/Cars/CarsList/Car/CarInfo";
import ErrorPage from './components/ErrorPage';
import Notifications from './components/Notifications';

import userContext from "./contexts/userContext";
import notificationContext from "./contexts/notificationContext";

import notificationReducer from "./reducers/notificationReducer";

import './App.css';


function App() {
  const [user, setUser] = useState({ uid: 101, name: 'Guest', url: '', phone: '' });
  const [notification, dispatch] = useReducer(notificationReducer, {type: '', state: 'none', message: ''});


  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]} >
        <notificationContext.Provider value={[notification, dispatch]} >
          <Header className="App-header" />

          <Notifications state={notification.state} message={notification.message} />

          <Switch>
            <Route path="/" component={LandingPage} exact />

            <Route path="/Login" component={LoginPage} exact />
            <Route path="/Register" component={RegisterPage} exact />
            <Route path="/Logout" component={Logout} exact />
            <Route path="/Cars" component={Cars} exact />
            <Route path="/MyProfile" component={MyProfile} exact />
            <Route path="/Ask" component={Ask} exact />
            <Route path="/Contacts" component={Contacts} exact />
            <Route path="/CreateNewCar" component={CreateNewCar} exact />
            <Route path="/CarInfo/:id" component={CarInfo} exact />
            <Route render={() => ErrorPage()} />
          </Switch>

        </notificationContext.Provider >
      </userContext.Provider>
      <Footer className="App-footer" />
    </div >
  );
}

export default App;
