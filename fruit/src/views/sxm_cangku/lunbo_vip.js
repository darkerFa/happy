import axios from 'axios'

function getLunbo(){
	return axios({
            url:'https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo',
            method:'post',
            headers:{
              'appName': 3000025,
              'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"head":{"version":"h5","cityCode":"8192","cityId":"dd7cbdb8-6463-436f-ba09-93c69150f137","districtId":"a872b70c-487c-4ebe-830b-bb0e1e341bc3","token":"","loginToken":""},"body":{"previewTime":"","operationType":0}}
	}).then(res=>{
		// console.log(res.data.Data)
		return res.data.Data
	})
}

export {getLunbo}