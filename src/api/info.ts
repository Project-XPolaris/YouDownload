import apiRequest from './request'

export interface ServiceInfo {
  name: string,
  authEnable: boolean,
  transEnable: boolean
  authUrl:string
}

export const fetchServiceInfo = async ():Promise<ServiceInfo> => {
  return apiRequest.get('/info')
}
