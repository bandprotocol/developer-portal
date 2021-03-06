import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from './context/modal'
import GlobalStyle from './GlobalStyle'
import Modal from './components/Modal'
import theme from 'ui/theme'
import { BandProtocolClient } from 'band.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from 'pages/Landing'
import PriceFeedPage from 'pages/dataset/Price'
import SportPage from 'pages/dataset/Sport'
import LotteryPage from 'pages/dataset/Lottery'
import IdentityPage from 'pages/dataset/Identity'
import NotFoundPage from 'pages/404'

export default class App extends Component {
  constructor(props) {
    super(props)
    BandProtocolClient.setGraphQlAPI('https://graphql.bandprotocol.com/graphql')
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dataset/price" component={PriceFeedPage} />
                <Route exact path="/dataset/sport" component={SportPage} />
                <Route exact path="/dataset/lottery" component={LotteryPage} />
                <Route
                  exact
                  path="/dataset/identity"
                  component={IdentityPage}
                />
                <Route path="/" component={NotFoundPage} />
              </Switch>
            </Router>
            <Modal />
          </React.Fragment>
        </ModalProvider>
      </ThemeProvider>
    )
  }
}
