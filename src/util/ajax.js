// import React from 'react';
// import { Modal, message } from 'antd-mobile';
import axios from 'axios';
import $ from 'jquery';
// 创建axios默认请求
let baseObj = {
    "head": {
        "timeStamp": "123456789",
        "idempotent": "false",
        "weight": "1"
    },
    "body": {
        "version": "1",
        "page": {
            "pageNumbers": "1",
            "countPerPages": "10"
        }
    }
}
// export default {
//     // 请求方式为get，并且不传参数
//     /**
//      * 因为现在调用接口不管是否需要参数，都会有默认参数传入，
//      * 所以在调用接口时，get() 方法用不到，不需要传的可以调用getData()
//      */
//     get: function (param) {
//         let obj = {};
//         if (param.url) {
//             obj.url = BaseUrl + param.url
//         }
//         if (param.method) {
//             obj.method = param.method;
//         } else {
//             obj.method = 'GET';
//         }
//         if (param.contentType) {
//             obj.headers = {};
//             obj.headers['Content-Type'] = param.contentType;
//         } else {
//             obj.headers = {};
//             obj.headers['Content-Type'] = 'application/json';
//         }
//         axios(obj)
//             .then(function (res) {
//                 param.callback(res)
//             }).catch(function (XHR, textStatus, errorThrown) {
//                 console.log('二级', textStatus);
//             });
//     },

//     // 请求方式为post，需要传参数
//     post: function (param) {
//         let obj = {};
//         if (param.url) {
//             obj.url = BaseUrl + param.url
//         }
//         if (param.method) {
//             obj.method = param.method;
//         } else {
//             obj.method = 'POST';
//         }
//         if (param.data) {
//             baseObj.body.data = param.data;
//             obj.data = baseObj;
//         } else {
//             obj.data = baseObj;
//         }
//         if (param.contentType) {
//             obj.headers = {};
//             obj.headers['Content-Type'] = param.contentType;
//         } else {
//             obj.headers = {};
//             obj.headers['Content-Type'] = 'application/json';
//         }
        
//         axios(obj)
//             .then(function (res) {
//                 param.callback(res)
//             }).catch(function (error) {
//                 console.log(error);
//             });
//     },
//     // 请求方式为get，需要传参数
//     getData: function (param) {
//         let getParamData = baseObj;
//         if (param.data) {
//             getParamData.body.data = param.data;
//         }

//         axios.get(BaseUrl + param.url, {
//             params: getParamData
//         })
//             .then(function (res) {
//                 param.callback(res)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

// };


export default {
    // 请求方式为get，并且不传参数
    /**
     * 因为现在调用接口不管是否需要参数，都会有默认参数传入，
     * 所以在调用接口时，get() 方法用不到，不需要传的可以调用getData()
     */
    get: function (param) {
        let obj = {};
        // 接口的发送方式是GET/POST
        if (param.method) {
            obj.method = param.method;
        } else {
            obj.method = 'GET';
        }

        // 接口的调用方式是 异步/同步
        if (param.contentType) {
            obj.contentType = param.contentType;
        } else {
            obj.contentType = 'application/json';
        }

        // 接口的调用方式是 异步/同步
        if (param.async == undefined || param.async) {
            obj.async = true;
        } else {
            obj.async = false;
        }

        // 接口传参
        if (param.data) {
            baseObj.body.data = param.data;
            obj.data = baseObj;
        } else {
            obj.data = baseObj;
        }

        $.ajax({
            url: window.BaseUrl + param.url,
            type: obj.method,
            async: obj.async,
            data: JSON.stringify(obj.data),
            contentType: obj.contentType,
            success: function(res){
                let data = {};
                data.data = res;
                param.callback(data)
            },
            error: function(data){

            }
        })
    },

    // 请求方式为post，需要传参数
    post: function (param) {
        let obj = {};
        // 接口的发送方式是GET/POST
        if (param.method) {
            obj.method = param.method;
        } else {
            obj.method = 'GET';
        }

        // 接口的调用contentType
        if (param.contentType) {
            obj.contentType = param.contentType;
        } else {
            obj.contentType = 'application/json;charset=utf-8';
        }

        // 接口的调用方式是 异步/同步
        if (param.async == undefined || param.async) {
            obj.async = true;
        } else {
            obj.async = false;
        }

        // 接口传参
        if (param.data) {
            baseObj.body.data = param.data;
            obj.data = baseObj;
        } else {
            obj.data = baseObj;
        }
        $.ajax({
            url: window.BaseUrl + param.url,
            type: obj.method,
            async: obj.async,
            data: JSON.stringify(obj.data),
            contentType: obj.contentType,
            success: function(res){
                let backData = {};
                backData.data = res;
                param.callback(backData)
            },
            error: function(data){

            }
        })
    },
    // 请求方式为get，需要传参数
    getData: function (param) {
        let obj = {};
        // 接口的发送方式是GET/POST
        if (param.method) {
            obj.method = param.method;
        } else {
            obj.method = 'GET';
        }

        // 接口的调用方式是 异步/同步
        if (param.contentType) {
            obj.contentType = param.contentType;
        } else {
            obj.contentType = 'application/json';
        }

        // 接口的调用方式是 异步/同步
        if (param.async == undefined || param.async) {
            obj.async = true;
        } else {
            obj.async = false;
        }

        // 接口传参
        if (param.data) {
            baseObj.body.data = param.data;
            obj.data = baseObj;
        } else {
            obj.data = baseObj;
        }
        $.ajax({
            url: window.BaseUrl + param.url,
            type: obj.method,
            async: obj.async,
            data: JSON.stringify(obj.data),
            contentType: obj.contentType,
            success: function(res){
                let backData = {};
                backData.data = res;
                param.callback(backData)
            },
            error: function(data){

            }
        })
    }

}