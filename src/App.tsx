import './base.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/home", "/"]} component={Home}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
