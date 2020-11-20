import './App.css';
// import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div id="App">
        <nav>
          <Link to="/contacts">Contacts</Link>
          <Link to="/newcontact">New Contact</Link>
          <Link to="/">Home</Link>
        </nav>
        <main>
        <Switch>
        <Route exact path="/"/>
          <h1>Welcome tu your Contacts App</h1>
        <Route path="/contacts"/>
          <h1>Here are your Contacts</h1>
        <Route path="/newcontact"/>
          <h1>Create a new Contact</h1>
        </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
