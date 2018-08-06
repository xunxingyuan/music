import wepy from 'wepy'

const url = 'http://192.168.100.246:9501'

export default {
    auth: (data)=>{
        let reqUrl = url + '/api/login/wxAuthorize'
        return requestData(reqUrl,data,'GET',true)
    },
    login:{
        vipLogin: (data)=>{
            let reqUrl = url + '/api/login/vipLogin'
            return requestData(reqUrl,data,'GET',true)
        },
        vistorLogin: (data)=>{
            let reqUrl = url + '/api/login/visitorLogin'
            return requestData(reqUrl,data,'GET',true)
        },
        getCode: (data)=>{
            let reqUrl = url + '/api/login/getVerificationCode'
            return requestData(reqUrl,data,'GET',true)
        }
    },
    course:{
        getAllCourse: (data)=>{
            let reqUrl = url + '/api/course/getById'
            return requestData(reqUrl,data,'GET')
        }
    },
    video:{
        getAllVideo: (data)=>{
            let reqUrl = url + '/api/video/getAll'
            return requestData(reqUrl,data,'GET')
        }
    }
}

function  requestData(reqUrl,data,type,auth){
    let header = {}
    if(!auth){
        let token = wepy.getStorageSync('token');        
        header['Authorization'] = 'Bearer '+ token
    }else{
        header = {}
    }
    return new Promise((resolve,reject)=>{
        wepy.request({
            url: reqUrl, //开发者服务器接口地址",
            data: data, //请求的参数",
            method: type,
            header: header,
            success: res => {
                resolve(res) 
            },
            fail: (res) => {
                reject(res)
            },
            complete: () => {}
          });
    })
}