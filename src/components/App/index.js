import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header/header'
import Landing from '../Landing/landing'
import Footer from '../Footer/footer'
import Welcome from '../Welcome'
import Login from '../Login'
import Signup from '../Sign'
import ErrorPage from '../ErrorPage'
import ForgetPassword from '../ForegetPassword'

import '../../app.css'

function App() {
  return (
    <Router>
      
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgetpassword" component={ ForgetPassword }/>
        <Route component={ErrorPage} />
      </Switch>
      
      <Footer/>
    </Router>
   
  );
}

export default App;