import React from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import HomeContainer from "./containers/home"
import MyBucketContainer from './containers/universityBucket'

function App() {
    return <Router>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/my-bucket" component={MyBucketContainer} />
    <Route exact path="/search" component={HomeContainer} />
   </Router>
}

export default App
