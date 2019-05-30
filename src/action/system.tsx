
export const SYSTEM_INITIALIZE = 'SYSTEM_INITIALIZE'
export function systemInitialize() {

  return {
    type: SYSTEM_INITIALIZE
  }
}

export const SYSTEM_READY = 'SYSTEM_READY'
export function systemReady() {

  return {
    type: SYSTEM_READY
  }
}

export const SYSTEM_INITIALIZE_FAILURE = 'SYSTEM_INITIALIZE_FAILURE'
export function systemInitializeFailure() {

  return {
    type: SYSTEM_INITIALIZE_FAILURE
  }
}