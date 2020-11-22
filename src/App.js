import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Screens/Signin";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  );
}

export default App;
