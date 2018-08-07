import wepy from 'wepy'

const url = 'http://192.168.100.246:9501'

export default {
  //微信验证
  auth: (data) => {
    let reqUrl = url + '/api/login/wxAuthorize'
    return requestData(reqUrl, data, 'GET', true)
  },
  //登录
  login: {
    vipLogin: (data) => {
      let reqUrl = url + '/api/login/vipLogin'
      return requestData(reqUrl, data, 'GET', true)
    },
    vistorLogin: (data) => {
      let reqUrl = url + '/api/login/visitorLogin'
      return requestData(reqUrl, data, 'GET', true)
    },
    getCode: (data) => {
      let reqUrl = url + '/api/login/getVerificationCode'
      return requestData(reqUrl, data, 'GET', true)
    }
  },
  //课程
  course: {
    getAllCourse: (data) => {
      let reqUrl = url + '/api/course/getById'
      return requestData(reqUrl, data, 'GET')
    }
  },
  //视频
  video: {
    getAllVideo: (data) => {
      let reqUrl = url + '/api/video/getAll'
      return requestData(reqUrl, data, 'GET')
    },
    likeVideo: (data) =>{
      let reqUrl = url + '/api/like/likeVideo'
      return requestData(reqUrl, data, 'GET')
    },
    likeVideoComments: (data) =>{
      let reqUrl = url + '/api/like/likeComment'
      return requestData(reqUrl, data, 'GET')
    }
  },
  //音频
  music: {
    searchMusic: (data) => {
      let reqUrl = url + '/api/search/album'
      return requestData(reqUrl, data, 'GET')
    }
  },
  //用户
  user: {
    getStudents: (data) => {
      let reqUrl = url + '/api/user/getMyStudents'
      return requestData(reqUrl, data, 'GET')
    }
  },
  //评论
  comment: {
    addComment: (data) => {
      let reqUrl = url + '/api/comment/add'
      return requestData(reqUrl, data, 'GET')
    },
    getUserComment: (data) => {
      let reqUrl = url + '/api/comment/getUserComment'
      return requestData(reqUrl, data, 'GET')
    },
    getVideoComment: (data) => {
      let reqUrl = url + '/api/comment/getVideoComment'
      return requestData(reqUrl, data, 'GET')
    }
  },
  //收藏
  collect: {
    collectMusic: (data) => {
      let reqUrl = url + '/api/collect/collectMusic'
      return requestData(reqUrl, data, 'GET')
    },
    collectVideo: (data) => {
      let reqUrl = url + '/api/collect/collectVideo'
      return requestData(reqUrl, data, 'GET')
    },
    getUserCollect: (data) => {
      let reqUrl = url + '/api/collect/getUserCollect'
      return requestData(reqUrl, data, 'GET')
    },
  }
}

function requestData(reqUrl, data, type, auth) {
  let header = {}
  if (!auth) {
    let token = wepy.getStorageSync('token');
    header['Authorization'] = 'Bearer ' + token
  } else {
    header = {}
  }
  return new Promise((resolve, reject) => {
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
      complete: () => { }
    });
  })
}