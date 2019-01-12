import axios from 'axios'

function Eaticon(){
	return axios({
		url:'/Home/GetMainBanners',
		method:'post',
		headers:{
			'Content-Type': 'text/html; charset=utf-8',

		}
	}).then(res=>{
		
		return res.data.RspData;
	})
}


function Eatlist(){
	return axios({
            url:'/Category/GetListByGlobalType',
            method:'post',
            headers:{
            
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data:'PageIndex=1&PageSize=5&Refresh=1547207380330'
	}).then(res=>{
		// console.log(res.data.Data)
		return res.data.RspData.ArticleList
	})
}


export {Eaticon,Eatlist}