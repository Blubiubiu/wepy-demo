import wepy from 'wepy'

const https_domain = "https://api.liqiang365.com"

const api = {
  //最新视频列表
  latestVideoList: https_domain + '/video/list',
  //轮播列表
  indexSwiper: https_domain + '/video/get/slide',
  //视频详情
  videoDetail: https_domain + '/video/detail',
  //最新资讯列表
  latestConsultationList: https_domain + '/topic/list',
  //资讯详情
  textDetail: https_domain + '/topic/detail',
  //关于我们
  aboutUs: https_domain + '/abouts/get',
  //更新视频播放量
  updatePlayCount: https_domain + '/video/update/playcount',

}

export default api
