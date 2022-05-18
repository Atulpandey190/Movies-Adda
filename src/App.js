import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
  return (
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/starred">
          <Starred></Starred>
          </Route>
          <Route>
            <div>
              this is 404 page
            </div>
          </Route>
        </Switch>
  );
}

export default App;
