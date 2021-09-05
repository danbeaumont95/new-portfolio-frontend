import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Projects from './Components/Projects';
import Register from './Components/Register';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
    {/* <h1>Hi</h1> */}
    <Router>

    <SideBar />
    <Switch>
    {/* <Home /> */}
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
