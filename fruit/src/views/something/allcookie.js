function saveCookie(cookieName,cookieValue){
    document.cookie = cookieName+"="+cookieValue;
    
}


function getCookie(cookieName){
	var cookieStr = unescape(document.cookie);
	var arr = cookieStr.split("; ");
	var cookieValue = "";
	for(var i=0;i<arr.length;i++){
		var temp = arr[i].split("=");
		if(temp[0]==cookieName){
			cookieValue = temp[1];
			break;
		}
	}
	return cookieValue;
}


function removeCookie(cookieName) {
    document.cookie=encodeURIComponent(cookieName)+'='
}

export {
    saveCookie,
    getCookie,
    removeCookie
}