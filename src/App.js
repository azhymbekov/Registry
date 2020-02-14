import React from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import Content from './Components/Content'
import {CreateCategory} from './Pages/Category/CreateCategory';
import{BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>    
      <div className="container">
        <h3 className = "m-3 d-flex justify-content-center">Welcome to Shop</h3>
        <h5 className = "m-3 d-flex justify-content-center">Registry</h5>
          <div className="App">
          <div>
            <Sidebar></Sidebar>
        </div>        
      </div>     
        
        <Switch>
          <Route path='/categories' component={CreateCategory} exact/>  
          <Route path='/content' component={Content} exact/>  
        </Switch>
      </div>
    </BrowserRouter>   
    
  );
}

export default App;
