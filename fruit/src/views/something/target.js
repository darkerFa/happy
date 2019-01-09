import axios from 'axios'

function gettarget(){
    return axios({
        url:'https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetAllCategory',
        method:'POST',
        headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          'appName': 3000025
        },
        data:{"Head":{"Token":"","LoginToken":"","CityId":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","CityCode":"2","DistrictId":"751b5b8e-c1f7-4785-abeb-507b460f01ab","DeviceId":"34dc1400de48673cddd22a83a24c69e2","MobileOS":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"},"Body":""}
      }).then(res=>{
          return res.data.Data.CategoryList
      })
}

function getnew(id,index,num){
    return axios({
        url:'https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetSearchList',
        method:'post',
        headers:{
            'appName': 3000025,
        },
        data:{"Head":{"Token":"","LoginToken":"","CityId":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","CityCode":"2","DistrictId":"751b5b8e-c1f7-4785-abeb-507b460f01ab","DeviceId":"34dc1400de48673cddd22a83a24c69e2","MobileOS":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"},"Body":{"Keyword":"","CategoryId":`${id}`,"CategoryCode":"","PageIndex":`${num}`,"Sort":`${index}`}}
    }).then(res=>{
        // console.log(res.data.Data.CommodityList)
        return res.data.Data.CommodityList

    })
}

export  {
    gettarget,
    getnew}