import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from 'ui/theme'
import { BandProtocolClient } from 'band.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from 'pages/Landing'
import PriceFeedPage from 'pages/dataset/Price'
import SportPage from 'pages/dataset/Sport'
import LotteryPage from 'pages/dataset/Lottery'
import NotFoundPage from 'pages/404'

export default class App extends Component {
  constructor(props) {
    super(props)
    BandProtocolClient.setGraphQlAPI(
      'https://graphql-data.bandprotocol.com/graphql',
    )
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dataset/price" component={PriceFeedPage} />
              <Route exact path="/dataset/sport" component={SportPage} />
              <Route exact path="/dataset/lottery" component={LotteryPage} />
              <Route path="/" component={NotFoundPage} />
            </Switch>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
