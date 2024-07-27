import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ActorSheet from './pages/ActorSheet';
import MovieSheet from './pages/MovieSheet';
import Categories from './pages/Categories';
import ActorList from './pages/ActorList';
import Search from './pages/Search';
import Home from './pages/Home';
import About from './pages/About';
import Apropos from './pages/Apropos';

function App() {
  return (
<BrowserRouter>
    <Switch>

      <Route path="/" exact component={Home}/> 
      <Route path="/actorSheet" exact component={ActorSheet}/> 
      <Route path="/movieSheet" exact component={MovieSheet}/> 
      <Route path="/categories/:id/:page?" exact component={Categories}/> 
      <Route path="/actorList/:page?" exact component={ActorList}/> 
      <Route path="/about" exact component={About}/> 
      <Route path="/apropos" exact component={Apropos}/> 
      <Route path="/search/:page?" exact component={Search}/> 
      <Route exact component={NotFound} /> {/* pas de PATH car cette page apparaît quand la page recherchée n'existe pas */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
