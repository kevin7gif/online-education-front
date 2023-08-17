import request from '@/utils/request'

export default {
  // 获取所有banner
  getListBanner() {
    return request({
      url: '/educms/bannerfront/getAllBanner',
      method: 'get'
    })
  }
}
