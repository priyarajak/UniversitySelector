import { combineReducers } from 'redux'
import home from '../containers/home/reducer'
import universityBucket from '../containers/universityBucket/reducer'

export default combineReducers({
  home,
  universityBucket
})