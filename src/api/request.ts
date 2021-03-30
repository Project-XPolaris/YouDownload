import { extend } from 'umi-request'

const apiRequest = extend({
  timeout: 1000
})
apiRequest.interceptors.request.use((url, options) => {
  const apiUrl = localStorage.getItem('apiUrl')
  if (apiUrl) {
    url = apiUrl + url
  }
  return {
    url, options
  }
})
export default apiRequest
