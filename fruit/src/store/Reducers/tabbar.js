const tabbar = (prevstate=true,action)=>{
	// console.log('tabbar.js页',prevstate,action);
	let {type,payload}=action;
	switch(type){
		case 'hidetabbar':
		return payload
		case 'showtabbar':
		return payload

		default:
		return prevstate
	}
}

export default tabbar