import {render} from "react-dom"
import React from "react"
class App extends React.Component {
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}
	handleClick(){
		const {ince,dece,counter} = this.props;
		ince();
	}
	onSubmit(event){
		alert(this.refs.text.value);
	}
	render() {
		const {ince,dece,counter} = this.props;
		return( 
			<form onSubmit={this.onSubmit}>
				<input ref='text' type="text" />
				<div>{counter}</div><input type="button" onClick={this.handleClick} value="++++++++++" />
				<button>submit</button>
			</form>
			)
	}
} 
class Bpp extends React.Component{ 
	render(){
		return (
			<div>{this.props.fuk}
			</div>)
	}
}
class Cpp extends React.Component{
	render(){
	const {ince,dece,increment,decrement,counter} =this.props;
	const id=this.props.params.id
		return (
			<div>this is cpp id为{id}</div>)
	}
}
export default App;