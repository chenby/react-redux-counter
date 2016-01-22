import {applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer.js"

const createStoreWithMiddleware=applyMiddleware(thunk)(createStore)

export default function configuerStore(initialStore){
	const store=createStoreWithMiddleware(reducer,initialStore);
	return store;
}
