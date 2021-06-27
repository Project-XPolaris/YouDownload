import apiRequest from './request'
import { BaseResponse } from './entites/base'

export interface UserAuth {
  username : string
  needInit : string
  token?:string
}
export const getUserAuth = (username:string, password:string):Promise<UserAuth> => {
  return apiRequest.post('/user/auth', { data: { username, password } })
}

export const initUser = (dataPath:string):Promise<BaseResponse> => {
  return apiRequest.post('/user/init', { data: { dataPath } })
}
