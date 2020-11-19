import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


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
          <h2>Please Log in</h2>
        <Route path="/contacts"/>
          <H1>Here are your Contacts</H1>
        <Route path="/newcontact"/>
          <h1>Create a new Contact</h1>
        </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
