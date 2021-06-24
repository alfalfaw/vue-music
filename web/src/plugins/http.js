import axios from 'axios'

// 接口文档地址
// https://jsososo.github.io/QQMusicApi/#/
const http = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export default http
