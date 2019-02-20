import wepy from 'wepy';

const url = 'https://music.gzjtit.com:9501';

export default {
  //微信验证
  auth: data => {
    let reqUrl = url + '/api/login/wxAuthorize';
    return requestData(reqUrl, data, 'GET', true);
  },
  //登录
  login: {
    vipLogin: data => {
      let reqUrl = url + '/api/login/vipLogin';
      return requestData(reqUrl, data, 'GET', true);
    },
    vistorLogin: data => {
      let reqUrl = url + '/api/login/visitorLogin';
      return requestData(reqUrl, data, 'GET', true);
    },
    getCode: data => {
      let reqUrl = url + '/api/login/getVerificationCode';
      return requestData(reqUrl, data, 'GET', true);
    },
    //刷新token
    refresh: data => {
      let reqUrl = url + '/api/login/refreshToken';
      return requestData(reqUrl, data, 'GET', true);
    }
  },
  //课程
  course: {
    getCourse: data => {
      let reqUrl = url + '/api/course/getById';
      return requestData(reqUrl, data, 'GET');
    },
    searchCourse: data => {
      let reqUrl = url + '/api/course/getByPage';
      return requestData(reqUrl, data, 'GET');
    },
    searchCourseNew: data => {
      let reqUrl = url + '/api/course/search';
      return requestData(reqUrl, data, 'GET');
    },
    //获取分类
    getCategory: data => {
      let reqUrl = url + '/api/course/getCourseType';
      return requestData(reqUrl, data, 'GET');
    },
    //获取分类课程
    getCategoryLesson: data => {
      let reqUrl = url + '/api/course/getByType';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //视频
  video: {
    getVideoBypage: data => {
      let reqUrl = url + '/api/video/getByPage';
      return requestData(reqUrl, data, 'GET');
    },
    getAllVideo: data => {
      let reqUrl = url + '/api/video/getAll';
      return requestData(reqUrl, data, 'GET');
    },
    likeVideo: data => {
      let reqUrl = url + '/api/like/likeVideo';
      return requestData(reqUrl, data, 'GET');
    },
    likeVideoComments: data => {
      let reqUrl = url + '/api/like/likeComment';
      return requestData(reqUrl, data, 'GET');
    },
    getVideoByID: data => {
      let reqUrl = url + '/api/video/getById';
      return requestData(reqUrl, data, 'GET');
    },
    //保存下载记录
    saveDownload: data => {
      let reqUrl = url + '/api/video/download';
      return requestData(reqUrl, data, 'GET');
    },
    //搜索视频
    searchVideo: data => {
      let reqUrl = url + '/api/video/getByPage';
      return requestData(reqUrl, data, 'GET');
    },
    //推荐视频
    recommendVideo: data => {
      let reqUrl = url + '/api/video/slideshow';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //音频
  music: {
    searchMusic: data => {
      let reqUrl = url + '/api/album/getByPage';
      return requestData(reqUrl, data, 'GET');
    },
    saveDownload: data => {
      let reqUrl = url + '/api/music/download';
      return requestData(reqUrl, data, 'GET');
    },
    //获取曲集详情
    getAlbumByID: data => {
      let reqUrl = url + '/api/album/getAlbumById';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //曲谱
  score: {
    searchScore: data => {
      let reqUrl = url + '/api/notation/getByPage';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //用户
  user: {
    getStudents: data => {
      let reqUrl = url + '/api/user/getStudents';
      return requestData(reqUrl, data, 'GET');
    },
    getTeacherInfo: data => {
      let reqUrl = url + '/api/user/getTeacherData';
      return requestData(reqUrl, data, 'GET');
    },
    getDownload: data => {
      let reqUrl = url + '/api/user/downLoadList';
      return requestData(reqUrl, data, 'GET');
    },
    getSkill: data => {
      let reqUrl = url + '/api/user/skillTree';
      return requestData(reqUrl, data, 'GET');
    },
    setSkill: data => {
      let reqUrl = url + '/api/user/saveSkill';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //评论
  comment: {
    addComment: data => {
      let reqUrl = url + '/api/comment/add';
      return requestData(reqUrl, data, 'GET');
    },
    getUserComment: data => {
      let reqUrl = url + '/api/comment/getUserComment';
      return requestData(reqUrl, data, 'GET');
    },
    getVideoComment: data => {
      let reqUrl = url + '/api/comment/getVideoComment';
      return requestData(reqUrl, data, 'GET');
    }
  },
  //收藏
  collect: {
    collectMusic: data => {
      let reqUrl = url + '/api/collect/collectMusic';
      return requestData(reqUrl, data, 'GET');
    },
    collectVideo: data => {
      let reqUrl = url + '/api/collect/collectVideo';
      return requestData(reqUrl, data, 'GET');
    },
    getUserCollect: data => {
      let reqUrl = url + '/api/collect/getUserCollect';
      return requestData(reqUrl, data, 'GET');
    }
  }
};

function requestData(reqUrl, data, type, auth) {
  let header = {};
  if (!auth) {
    let token = wepy.getStorageSync('token');
    header['Authorization'] = 'Bearer ' + token;
  } else {
    header = {};
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      url: reqUrl, //开发者服务器接口地址",
      data: data, //请求的参数",
      method: type,
      header: header,
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      },
      complete: () => {}
    });
  });
}
