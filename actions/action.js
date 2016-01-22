export const ADD="ADD"
export const RED="RED"

export function increment(){
	return {
		type:ADD
	}
}
export function decrement(){
	return {
		type:RED
	}
}
export function ince(){
	return (dispatch,getState) =>{
		//const {counter}=getState()
		dispatch(increment());
	}
}
export function dece(){
	return (dispatch,getState)=>{
		//const {counter}=getState()
		dispatch(decrement())
	}
}
