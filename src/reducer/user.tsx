
import * as UserActions from '../action/user'
import initial from '../store/initial'
import { IAction } from '../interface/action'

function user(state = initial, action: IAction): any {

  switch (action.type) {

    case UserActions.USER_LOGIN:
    case UserActions.USER_LOGIN_SUCCESS:
    case UserActions.USER_LOGIN_FAILURE:
    case UserActions.USER_LOGOUT:
    case UserActions.USER_LOGOUT_SUCCESS:
    case UserActions.USER_FORGOT_PASSWORD:
    case UserActions.USER_ASK_PASSWORD:
    case UserActions.USER_ASK_PASSWORD_SUCCESS:
 

      let newState = Object.assign( 
        {}, 
        state, 
        {
          user: action.payload
        }
      )

      return newState

    default:

      return state
  }
}

export default user