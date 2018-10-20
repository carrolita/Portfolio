import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import LandingPage from '../LandingPage'
import './Main.scss'


class Main extends Component {
  render() {
    return (
      <div className="container Main">
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    )

  }

}

export default Main
