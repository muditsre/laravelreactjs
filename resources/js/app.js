/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import bootstrap from './bootstrap'

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
///require('./components/Index');

import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'

function App() {
    return (
      <BrowserRouter>
      <div  >
      <Menu />
      <Switch>
      <Route path='/' exact component= {Home} />
      <Route path='/login' component= {Login}/>
      <Route path='/register' component= {Register} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
  const Home = () => {
    return <div  >
      This is Home Page
    </div>
  }
  
  
  export default App;
  if (document.getElementById('app')) {
  ReactDOM.render(<App  />, document.getElementById('app'));
  }