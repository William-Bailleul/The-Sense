import './App.css';
import './component/Navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    function App(props){
      return <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/nos-experiences">
              <NosExperiences />
            </Route>
            <Route path="/a-propos-de-nous">
              <AProposDeNous />
            </Route>
            <Route path="/nos-equipements">
              <NosEquipements />
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
          </Switch>
      </Router>
    }
  );
}

export default App;
