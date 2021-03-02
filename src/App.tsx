import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import GanListPage from './pages/GanList';
import PersonalGansPage from './pages/PersonalGans';
import SearchGanPage from './pages/SearchPage';

const user = localStorage.getItem('user');
if(user){
    (window as any).authenicated = true
}else {
  (window as any).authenicated = false
}


function App() {
  return (
    <BrowserRouter>
      <Route path="/auth" component={AuthPage} />
      <Route path="/public-gans" component={GanListPage} />
      <Route path="/my-gans" exact component={PersonalGansPage} />
      <Route path="/" exact component={SearchGanPage} />
    </BrowserRouter>
  );
}

export default App;
