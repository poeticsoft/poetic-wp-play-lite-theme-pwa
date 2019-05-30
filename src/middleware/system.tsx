

import * as SystemActions from '../action/system'

const system = store => next => action => {

  switch(action.type) {

    case SystemActions.SYSTEM_INITIALIZE:  

      fetch('/wp-json/poeticplaylite/system-get-data')
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