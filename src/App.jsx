import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropsDemo from "./pages/PropsDemo";
import CssDemo from "./pages/CssDemo";
import UseStateDemo from "./pages/UseStateDemo";
import EventsDemo from "./pages/EventsDemo";
import UseEffectDemo from "./pages/UseEffectDemo";
import AxiosFetchDemo from "./pages/AxiosFetchDemo";
import ContextDemo from "./pages/ContextDemo";
import UseFormDemo from "./pages/UseFormDemo";
// import ReduxDemo from "./pages/ReduxDemo";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/props">Props</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/usestate">useState</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/useeffect">useEffect</Link>
            </li>
            <li>
              <Link to="/axios-fetch">Axios/Fetch</Link>
            </li>
            <li>
              <Link to="/context">Context</Link>
            </li>
            <li>
              <Link to="/useform">useForm</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/props" component={PropsDemo} />
          <Route path="/css" component={CssDemo} />
          <Route path="/usestate" component={UseStateDemo} />
          <Route path="/events" component={EventsDemo} />
          <Route path="/useeffect" component={UseEffectDemo} />
          <Route path="/axios-fetch" component={AxiosFetchDemo} />
          <Route path="/context" component={ContextDemo} />
          <Route path="/useform" component={UseFormDemo} />
          {/* <Route path="/redux" component={ReduxDemo} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
