/**
 * 日期转换
 */
function formatTen(num) {
    return num < 10 ? ('0' + num) : num;
}
var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return y + '-' + formatTen(m) + '-' + formatTen(d) + ' ' + formatTen(h) + ':' + formatTen(minute) + ':' + formatTen(second);
};

var formatYear = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + formatTen(m) + '-' + formatTen(d);
};

/**
 * 验证手机号码
 * @param phoneNum 号码
 */
function isTruePhone(phoneNum) {
    var re = /^1(3|4|5|7|8)[0-9]{9}$/g;
    // var re = /^(\+86|0086)?\s*1[34578]\d{9}$/g;
    return re.test(phoneNum);
}

/**
 * 验证邮箱
 * @param email 邮箱号
 */
function isTrueEmail(email) {
    var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return regEmail.test(email);
}

/**
 * 验证固话
 * @param telephone 邮箱号
 */
function isTrueTelephone(telephone) {
    var regTelephone = /^0\d{2,3}-?\d{7,8}$/;
    return regTelephone.test(telephone);
}

/**
 * 验证字符串长度
 * @param strLength 字符串
 */
function getStrLenght(message, MaxLenght) {
    var strlenght = 0; //初始定义长度为0
    // var txtval = $.trim(message);
    var txtval = message;
    // 需要区分中英文时进行以下循环
    // for (var i = 0; i < txtval.length; i++) {
    //     if (isCN(txtval.charAt(i)) == true) {
    //         strlenght = strlenght + 2; //中文为2个字符
    //     } else {
    //         strlenght = strlenght + 1; //英文一个字符
    //     }
    // }

    // 不需要区分中英文，直接取字符串长度
    strlenght = txtval.length;
    return strlenght > MaxLenght ? false : true;
}

// 如果中午需要占2个字符，则需要通过本函数进行判断是不是中午
function isCN(str) { //判断是不是中文
    var regexCh = /[u00-uff]/;
    return !regexCh.test(str);
}

//获得上一年在昨天这一天的日期  
function getLastTwoYear(date) {
    var strYear = date.getFullYear() - 2;
    var strDay = date.getDate();
    var strMonth = date.getMonth() + 1;
    var datastr = {};
    // if (strMonth < 10) {
    //     strMonth ="0"+strMonth;
    // }
    // if (strDay < 10) {
    //     strDay ="0"+strDay;
    // }
    datastr.strYear = strYear;
    datastr.strMonth = strMonth;
    return datastr;
}

/**
 * 获取浏览器URL中查询字符串中的参数
 * @param href 浏览器地址
 */
function parameter(href) {
    var sHref = href;
    var args = sHref.split('?');
    if (args[0] == sHref) {
        return '';
    }

    var arr = args[args.length-1].split('&');
    var obj = {};
    for (var i = 0; i < arr.length;i++){
        var arr2 = arr[i].split('=');
        if(arr2.length > 2){
            // let arr3 = arr2;
            let first = arr2.shift();
            obj[first] = arr2.join('=');
        } else{
            obj[arr2[0]] = arr2[1];
        }
        
    }
    console.log(args, 'args-parameter')
    // for(let j=1;j<arr.length;j++){

    // }
    console.log(obj, 'obj-hrefs');
    return obj;
}

/**
 * 判断打开首页的是微信浏览器还是其他浏览器
 */
function isWxBrowser (){
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            // alert('在微信中打开');
            return 'micromessenger';
            //在微信中打开
        }else{
            if(ua.indexOf('mpbank') > -1){
                // 在手机银行打开
                return 'mpbank';
            }
            // alert('在浏览器打开');
            return 'browser';
        }
    } else {
        // alert('否则就是PC浏览器打开');
        return 'PCBrowser';
        //否则就是PC浏览器打开
    }
}

//链接不对时跳初始页
function initial (){
    let isWxBrowser = this.isWxBrowser();
    if (isWxBrowser != 'mpbank') {
        // console.log("hhh ")
        window.location.href = "#/"
    }
}



//返回的参数
function paramsUrl (msg){
    let param = window.location.href.split("?")[1];
    console.log(param,'param');
    if(param){
        let newParam = param.split('&');
        //判断是否有error参数，有的话替换新的
        newParam.map((item)=>{
            if(item.indexOf('error=') > -1){
                let errStr = item.split('=');
                errStr[1] = msg;
                item = errStr.join('=');
                return ''
            } 
        })
        console.log(newParam, 'newParam');
        //判断是否有error参数
        let res = newParam.filter((item) => {
            console.log(item,'res');
            return item.indexOf('error=') > -1
          })

        if(res.length > 0){
            window.location.href = "#/error?" + newParam.join('&');
        } else{
            window.location.href = "#/error?error=" + msg + '&' + newParam.join('&');
        }
        
    } else{
        window.location.href = "#/error?error=" + msg;
    }   
    
}

export default {
    formatTen,
    formatDate,
    isTruePhone,
    isTrueEmail,
    isTrueTelephone,
    formatYear,
    getStrLenght,
    getLastTwoYear,
    parameter,
    isWxBrowser,
    initial,
    paramsUrl
}