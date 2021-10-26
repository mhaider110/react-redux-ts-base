import './base.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path={["/home", "/"]} component={Home}/>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
