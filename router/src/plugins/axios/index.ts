import Axios from './Axios'
const http = new Axios({
  baseURL: 'http://127.0.0.1:5173/api',
  timeout: 100000,
  headers: {},
})
export { http }
