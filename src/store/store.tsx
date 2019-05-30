
import { 
  createStore,
  applyMiddleware
} from 'redux'
import rootReducer from '../reducer/root'
import initial from './initial'
import system from '../middleware/system'
import user from '../middleware/user'

const store:any = createStore(
  rootReducer,
  initial,
  applyMiddleware(
    system,
    user
  )
)

export default store