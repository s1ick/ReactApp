import React, {Fragment} from "react";
import './styles/App.css'
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from "./components/UI/navbar/navbar";
import AppRouter from "./components/AppRouter";


function App() {
  return (
<Router>
  <Fragment>
      <Navbar />
      <AppRouter />
  </Fragment>
</Router>
  )
}
export default App;
