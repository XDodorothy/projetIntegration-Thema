import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ActorSheet from './pages/ActorSheet';


function App() {
  return (
<BrowserRouter>
    <Switch>

      <Route path="/" exact component={ActorSheet}/> 
      <Route exact component={NotFound} /> {/* pas de PATH car cette page apparaît quand la page recherchée n'existe pas */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
