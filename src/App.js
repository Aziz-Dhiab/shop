import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Home from "./Pages/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/Men" component={Men}/>
        <Route exact path ="/Women" component={Women}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
