import { combineReducers } from '@reduxjs/toolkit'
import { reducer as programReducer, MODULE as programMODULE } from 'src/slices/program'
import { reducer as userReducer, MODULE as userMODULE } from 'src/slices/user'
import { reducer as topicReducer, MODULE as topicMODULE } from 'src/slices/topic'
import { reducer as alertReducer, MODULE as alertMODULE } from 'src/slices/alert'
import { reducer as sWorkerReducer, MODULE as sWorkerMODULE } from 'src/slices/sWorker'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  [programMODULE]: programReducer,
  [topicMODULE]: topicReducer,
  [alertMODULE]: alertReducer,
  [userMODULE]: userReducer,
  [sWorkerMODULE]: sWorkerReducer,
  form: formReducer,
})

export default rootReducer
