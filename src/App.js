import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import HomePage from "./pages/homePage/HomePage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
