import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import UserCard from "./UserCard";
import CreatePoll from "./CreatePoll";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <Login />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/questions/bad_id" component={NotFound} />
                  <Route path="/questions/:question_id" component={UserCard} />
                  <Route path="/add" component={CreatePoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NotFound} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={2} centered>
    <Grid.Row>
      <Grid.Column>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
