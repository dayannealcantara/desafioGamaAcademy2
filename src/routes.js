
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clientes from './Pages/Clientes';
import Produtos from './Pages/Produtos';


export default function Routes() {
  return (
    <Switch>
      <Route path="/produtos" exact component={Produtos} />
      <Route path="/" component={Clientes} /> 
    </Switch>
  );
}