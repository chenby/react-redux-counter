import {combineReducers} from "redux"
import { ADD,RED } from '../actions/action'
function counter(state=0,action){
	switch(action.type){
		case ADD: return state+1;
		case RED:return state-1;
		default:return state;
	}
}
const rootReducer=combineReducers({
	counter
})
export default rootReducer;