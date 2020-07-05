import axios from 'axios'

// // 允许跨域设置，不然可能因为拿不到cookie而报错
axios.defaults.withCredentials = true;

export function request(config) {
    //1、创建axios实例
    const instance = axios.create({
        baseURL:'http://localhost:3000/',
        timeout:8000
    })

//    请求拦截
    instance.interceptors.request.use(config=>{
        return config;
    }),err=>{
        console.log(err);
    };
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    }),err=>{
        console.log(err);
    };
    // 3、发送网络请求
    return instance(config)  //简写方式 返回的是promise
}

//
// /*这里的地址就是刚刚启起来的服务器地址  */
// axios.defaults.baseURL = 'http://localhost:3000/';
//
//
// /*请求拦截*/
// axios.interceptors.request.use(
//     config => {
//         if (config.meth === 'post' && !(config.data instanceof FormData)) {
//             config.headers = {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             };
//             config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) /*这里是，后端要求传数组的时候做的设置，以前出过错*/
//         }
//         return config
//     }, error => {
//         return Promise.reject(error)
//     }
// )
// /* 响应拦截 */
// axios.interceptors.response.use(
//     res => {
//         /*可在这里根据返回的状态码做一些拦截操作*/
//         return res
//     }, err => {
//         return Promise.resolve(err)
//     }
// );
// export default axios  /*记得导出*/
