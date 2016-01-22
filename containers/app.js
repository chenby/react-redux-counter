import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import App from '../component/App.js'
import *as Actions from '../actions/action'
function mapStateToprops(state){
	return {
		counter:state.counter
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(Actions,dispatch)
}
export default connect(mapStateToprops,mapDispatchToProps)(App)