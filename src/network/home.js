import {request} from './index'

//封装一个方法用于请求的url分离，后期好维护
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}