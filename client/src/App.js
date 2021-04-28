import React  from 'react';
import { Container } from 'react-bootstrap';
import SignUp from './pages/SignUp.js'
import { AuthProvider } from './contexts/AuthContext.js'
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Login from './pages/Login'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import UpdateProfile from './pages/UpdateProfile'

function App() {
  return (
  
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/updateProfile" component={UpdateProfile} />
              <PrivateRoute exact path="/" component={ Dashboard } />
              <PrivateRoute exact path="/about" component={ About} />
              <PrivateRoute exact path="/contact" component={ Contact } />
              <PrivateRoute exact path="/support" component={ Support } />
              <Route exact path="/signup" component={ SignUp } />
              <Route exact path="/login" component={ Login } />
            </Switch>
          </AuthProvider>
        </Router>

  ) 
}

export default App;
