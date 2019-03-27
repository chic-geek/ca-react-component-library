import "./styles.scss";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from "../Examples/SignUpForm";
import SignInForm from "../Examples/SignInForm";
import SampleForm from "../Examples/SampleForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="open-sans container">
            <h1 className="h1">Form examples</h1>
            <nav>
              <ul className="ul">
                <li>
                  <Link to="/sign-up">Sign up</Link>
                </li>
                <li>
                  <Link to="/sign-in">Sign in</Link>
                </li>
                <li>
                  <Link to="/sample">Sample</Link>
                </li>
              </ul>
            </nav>
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/sample" component={SampleForm} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
