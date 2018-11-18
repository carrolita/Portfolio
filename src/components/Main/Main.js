import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import LandingPage from '../LandingPage'
import './Main.scss'
import NotFound from "../NotFound";
import DetailPage from "../DetailPage/DetailPage";
import assignments from '../../assignments.json';


class Main extends Component {
  render() {
    return (
      <div className="container Main">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          {
            assignments.map(data => <Route path={data.link} render={() => <DetailPage data={data}/>} />)
          }
          <Route path='/bunny' render={() => <DetailPage data={assignments[0]}/>} />
          <Route path='**' component={NotFound} />
        </Switch>
      </div>
    )

  }

}

export default Main
