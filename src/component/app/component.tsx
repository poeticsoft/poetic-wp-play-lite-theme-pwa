
import React, { Component } from 'react'
import MessagesComponent from '../messages/component'

import './style.scss'

class AppComponent extends Component {

  render() {

    return (
      <div className="App">
        APP
        <MessagesComponent />
      </div>
    )
  }
}

export default AppComponent
