const cd = (prevstate=null,action)=>{
    // console.log('cd页',prevstate,action);

    let {type,payload}=action;
    switch(type){
    	case 'cd_name':
    	return payload

    	// case 'cd_name2':
    	// return payload

    	default:
    	return prevstate
    }
}
export default cd;