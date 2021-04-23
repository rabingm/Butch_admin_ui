import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminLoginForm from './components/adminLogin/AdminLoginForm';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPP from './components/adminLogin/ForgotPP';

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/dashboard">
          <Dashboard/>
          </Route>


          <Route exact path="/forgotpp">
						<ForgotPP />
					</Route>

          <Route path="/">
            <AdminLoginForm/>
          </Route>

        </Switch>
      </Router>

      
      
      {/* <AdminLoginForm/> */}
      
    </div>
  );
}

export default App;
