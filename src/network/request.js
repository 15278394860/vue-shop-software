import axios from 'axios'
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    // 2.axios的拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => { })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    // 3.发送真正的请求
    return instance(config)
}