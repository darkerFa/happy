import axios from 'axios'

function getLunbo(){
	return axios({
            url:'https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo',
            method:'post',
            headers:{
              'appName': 3000025,
              'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"head":{"version":"h5","cityCode":"4","cityId":"ebff50b7-ee3e-4f46-80c2-a8c24feb4597","districtId":"4f6b48e6-ae41-4f8b-924b-365a3d8f83d2","token":"","loginToken":""},"body":{"previewTime":"","operationType":0}}

	}).then(res=>{
		// console.log(res.data.Data)
		return res.data.Data
	})
}

export {getLunbo}