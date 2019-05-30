
// https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/

import * as UserActions from '../action/user'

const system = store => next => action => {

  switch(action.type) {

    case UserActions.USER_LOGIN:  

      fetch('/wp-json/jwt-auth/v1/token')
      .then(function(response) {

        response.json()
        .then(function(json) { 

          console.log()
        })

      })
      .catch(function(error) {

        console.log(error)

      })

      break 

    case UserActions.USER_ASK_PASSWORD:  

      fetch('/wp-json/jwt-auth/v1/token')
      .then(function(response) {

        response.json()
        .then(function(json) { 

          console.log()
        })

      })
      .catch(function(error) {

        console.log(error)

      })

      break 


    default:

      next(action)

      break
  }
}

export default system