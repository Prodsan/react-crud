import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Four0four } from './pages/Four0four';
import { Index } from './pages/Index';
import { AddUser } from './pages/AddUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/user/:id" exact>{
            // <UserRoute />
          }
          </Route>
          <Route path="/add-user" exact>
            <AddUser />
          </Route>
          <Route >
            <Four0four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
