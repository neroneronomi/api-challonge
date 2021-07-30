import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Tournament from "./routes/Tournament";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/tournament">
            <Tournament />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
