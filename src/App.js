import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ActorSheet from './pages/ActorSheet';
import MovieSheet from './pages/MovieSheet';
import Categories from './pages/Categories';


function App() {
  return (
<BrowserRouter>
    <Switch>

      <Route path="/" exact component={ActorSheet}/> 
      <Route path="/moviesheet" exact component={MovieSheet}/> 
      <Route path="/categories" exact component={Categories}/> 
      <Route exact component={NotFound} /> {/* pas de PATH car cette page apparaît quand la page recherchée n'existe pas */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
