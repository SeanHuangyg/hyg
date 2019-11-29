import axios from 'axios'
import Util from '../util/util'

const service = axios.create({
	// 测试服
	baseURL: window.BaseUrl, // api 的 base_url
})

const href = Util.parameter(window.location.href);

service.interceptors.request.use(
	config => {
		if (config.url.indexOf("/activity/getTopic") > -1) {
			console.log('不需要传token');
		} else {
			let auth;
			if (window.localStorage.getItem("auth")) {
				auth = window.localStorage.getItem("auth");
			} else if (href.access_token) {
				auth = href.access_token;
			}
			// config.headers['Accept-Language'] = 'zh-CN';
			// config.headers['Accept'] = 'application/json';
			config.headers['Authorization'] = 'Bearer ' + auth;
			config.headers['Access-Control-Request-Method'] = 'CORS';
			config.headers['Content-Type'] = 'application/json;charset=utf-8';
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)
service.interceptors.response.use(
	/**
	 * 下面的注释为通过在response里，自定义code来标示请求状态
	 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
	 * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
	 * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
	 */
	response => {
		return response
	}, error => {
		// if (error.response && error.response.data.code == '401') {
		//     window.location.href = '#/login';
		//     localStorage.setItem('auth', '');
		//     localStorage.setItem('userName', '');
		// } else if (error.response && error.response.data.code == '403') {
		//     window.location.href = '#/login';
		//     localStorage.setItem('auth', '');
		//     localStorage.setItem('userName', '');
		// }
		// return error.response
		// }
	}
)

export default service;