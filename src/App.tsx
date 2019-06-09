import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './App.scss';
import logo from './assets/images/logo.svg';
import Albums from './components/Albums';
import Post from './components/Post';
import Posts from './components/Posts';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="fixed-top navbar navbar-dark bg-dark w-100">
            <ul className="navbar-nav flex-row justify-content-start container px-2">
              <li className="navbar-brand">
                <img src={logo} width="40" height="40" className="app-logo d-inline-block align-top" alt=""></img>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact={true} to="/" activeClassName="active">Posts</NavLink>
              </li>
              <li className="nav-item ml-3">
                <NavLink className="nav-link" to="/albums/" activeClassName="active">Albums</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section className="container">
          <Route path="/" exact component={Posts} />
          <Route path="/posts/:id/" component={Post} />
          <Route path="/albums/" component={Albums} />
        </section>
      </div>
    </Router>
  );
}

export default App;
