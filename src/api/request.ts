import { extend } from "umi-request"

const apiRequest = extend({
  prefix: 'http://localhost:7500',
  timeout: 1000,
});

export default apiRequest
