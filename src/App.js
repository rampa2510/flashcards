import { Switch, Route } from "react-router-dom";
import SignIn from "./Screens/Signin";
import FlashCards from "./Screens/FlashCards";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/show-flashcards" exact component={FlashCards} />
    </Switch>
  );
}

export default App;
