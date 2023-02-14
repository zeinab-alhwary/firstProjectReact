import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Navbarcomponent from './NavBar/Navbarcomponent';
import LoginComponent from './Login/LoginComponent';
import Register from './Register/RegisterComponent';

import { BrowserRouter, Switch,Route } from 'react-router-dom';
import notFound from './NotFound/NotFoundBage';
import Home from './MoviesHome/Movies';
import Movies from './MoviesData/MoviesData';
import Favorite from './MovieFavorite/MyFavorite';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarcomponent />
      <Switch>
     <Route exact className="home" path={"/"} component={Home} />  
     <Route exact path={"/login"}component={LoginComponent} />
      <Route exact path={"/register"} component={Register }/>
      <Route exact path={"/view/:id"} component={Movies}/>
      <Route exact path={"/fav"} component={Favorite}/>
      <Route exact path={"*"} component={notFound }/>
      </Switch>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
