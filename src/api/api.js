/**
 * 基础API封装
 */
import axios from 'axios'
import config from '../../config'
/**
 * 根据API名称获取URL
 * @param {*} api API的名称
 */
const url = (api) => {
    return config.dev.httpType + '://' + config.dev.host + ':' + config.dev.serverPort  + api;
}

export default {
    /**
     * get请求
     * @param {*} api API名称
     * @param {*} resolve 请求成功的回调
     * @param {*} reject 请求失败的回调
     */
    async get(api, resolve, reject) {
        return (await axios({
            method: 'get',
            url: url(api),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }))['data'];
    },
    /**
     * post请求
     * @param {*} api API名称
     * @param {*} data Post请求数据
     * @param {*} resolve 请求成功的回调
     * @param {*} reject 请求失败的回调
     */
    async post(api, data, resolve, reject) {
        return (await axios({
            method: 'post',
            url: url(api),
            data: data,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }))['data'];
    }
}