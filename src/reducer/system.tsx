
import * as SystemActions from '../action/system'
import initial from '../store/initial'
import { IAction } from '../interface/action'

function user(state = initial, action: IAction): any {
  
  switch (action.type) {

    case SystemActions.SYSTEM_INITIALIZE: 

      return Object.assign( 
        {}, 
        state, 
        {
          system: {
            state: 'initializing'
          }
        }
      )

    case SystemActions.SYSTEM_READY: 

      return Object.assign( 
        {}, 
        state, 
        {
          system: {
            state: 'ready'
          }
        }
      )

    case SystemActions.SYSTEM_INITIALIZE_FAILURE:

      return Object.assign( 
        {}, 
        state, 
        {
          system: {
            state: 'error'
          }
        }
      )

    default:

      return state
  }
}

export default user