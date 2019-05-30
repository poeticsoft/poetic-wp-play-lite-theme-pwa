
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

interface IProps {
  user: any,
  system: any
}

class Messages extends Component<IProps> {

  render() {

    console.log(this.props)

    return (
      <div className="Messages">
        [ { this.props.system.state } ]
        [ { this.props.user.state } ]
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    system: state.system
  }
}

const MessagesComponent = connect(
  mapStateToProps
)(Messages)

export default MessagesComponent
