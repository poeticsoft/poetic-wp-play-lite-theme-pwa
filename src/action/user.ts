
export const USER_LOGIN = 'USER_LOGIN'
export function userLogin(auth: any) {

  return {
    type: USER_LOGIN, 
    payload: auth 
  }
}

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export function userLoginSuccess(data) {

  return {
    type: USER_LOGIN_SUCCESS,
    payload: data
  }
}

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export function userLoginFailure(error) {

  return {
    type: USER_LOGIN_FAILURE,
    error: error
  }
}

export const USER_LOGOUT = 'USER_LOGOUT'
export function userLogout() {

  return {
    type: USER_LOGOUT
  }
}

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export function userLogoutSuccess() {

  return {
    type: USER_LOGOUT_SUCCESS
  }
}

export const USER_FORGOT_PASSWORD = 'USER_FORGOT_PASSWORD'
export function userForgotPassword() {

  return {
    type: USER_FORGOT_PASSWORD
  }
}

export const USER_ASK_PASSWORD = 'USER_ASK_PASSWORD'
export function userAskPassword() {

  return {
    type: USER_ASK_PASSWORD
  }
}

export const USER_ASK_PASSWORD_SUCCESS = 'USER_ASK_PASSWORD_SUCCESS'
export function userAskPasswordSuccess() {

  return {
    type: USER_ASK_PASSWORD_SUCCESS
  }
}