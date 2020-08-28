import { extend } from "umi-request"

const apiRequest = extend({
  prefix: 'http://localhost:8482',
  timeout: 1000,
});

export default apiRequest
