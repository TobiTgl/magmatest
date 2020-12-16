import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import UILink from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { withStyles, useTheme } from "@material-ui/core/styles";

import Header from "./Components/Header";
import Underheader from "./Components/Underheader";
import Matches from "./Components/Matches";
import {PrivateRoute} from "./Components/PrivateRoute";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin"

import './App.css';
import Teams from "./Pages/Teams";
import Tournaments from "./Pages/Tournaments";
import Bets from "./Pages/Bets"
import Profile from "./Pages/Profile";

import {userService}  from "./Services/user.service"
import axios from "axios";


const styles = theme => ({
  footer:{
    backgroundColor: "#1c202b",
    padding: "25px 0px",
    marginTop: "50px",
  }
});


function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <UILink color="inherit" href="https://material-ui.com/">
          Magma team
        </UILink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      matches: {},
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };



  componentDidMount() {
      console.log(userService.getCredentials());
  }

  render(){
    const { classes } = this.props;
    return (
        <React.Fragment>
            <Router>
                <Header></Header>
                        <Switch>
                            <Route exact path={'/'}>
                                <Underheader></Underheader>
                                <Matches/>
                            </Route>
                            <Route path="/signin">
                                <Signin />
                            </Route>
                            <Route path="/signup">
                                <Signup />
                            </Route>
                            <Route path="/teams">
                                <Teams/>
                            </Route>
                            <Route path="/bets">
                                <Bets/>
                            </Route>
                            <Route path="/tournaments">
                                <Tournaments/>
                            </Route>
                            <PrivateRoute path="/profile" component={Profile} />
                        </Switch>
              {/* Footer */}
              <footer className={classes.footer}>
                <Container maxWidth="sm">
                  <Typography variant="body1">Esports competition games web-service.</Typography>
                  <Copyright />
                </Container>
              </footer>
            </Router>
        </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
