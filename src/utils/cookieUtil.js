/**
 * 添加 cookie
 * @param name 名称
 * @param value 值
 * @param expiresHours 过期时间
 */
export function addCookie(name, value, expiresHours) {
    let cookieString = `${name}=${escape(value)}`;
    // 判断是否设置过期时间,0代表关闭浏览器时失效
    if (expiresHours > 0) {
        const date = new Date();
        date.setTime(date.getTime() + expiresHours * 1000);
        cookieString = `${cookieString};expires=${date.toUTCString()}`;
    }
    document.cookie = cookieString;
}

/**
 * 修改 cookie
 * @param name 名称
 * @param value 值
 * @param expiresHours 过期时间
 */
export function editCookie(name, value, expiresHours) {
    let cookieString = `${name}=${escape(value)}`;
    if (expiresHours > 0) {
        const date = new Date();
        date.setTime(date.getTime() + expiresHours * 1000); // 单位是毫秒
        // @ts-ignore
        cookieString = `${cookieString};expires=${date.toGMTString()}`;
    }
    document.cookie = cookieString;
}

/**
 * 根据名字获取cookie的值
 * @param name
 */
export function getCookieValue(name) {
    const strCookie = document.cookie;
    const arrCookie = strCookie.split('; ');
    for (const cookie of arrCookie) {
        const arr = cookie.split('=');
        if (arr[0] === name) {
            console.log('unescape(arr[1])', unescape(arr[1]));
            return unescape(arr[1]);
        }
    }
}


//使用方式
//1、在成功获取短信验证码后执行 addCookie 方法，
addCookie('secondsremained', 60, 60); // 添加cookie记录,有效时间60s

//2、定义你的倒计时函数，并使用 getCookieValue和  editCookie ，进行获取cookie中的 剩余秒数，并在倒计时的过程中修改Cookie中存储的剩余秒数。
/*settime = () => {
    let countdown = 60;
    // @ts-ignore
    countdown = getCookieValue('secondsremained');
    const timer = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(timer);
            this.captchaBtnText = '重新获取';
        } else {
            this.captchaBtnText = `重新获取(${countdown}s)`;
            countdown--;
        }
        editCookie('secondsremained', countdown, countdown + 1);
    }, 1000);
}*/

//3、再 react 组件的 componentWillMount 或者 componentDidMount 生命周期函数中执行下面的验证，如果Cookie中存在剩余倒计时的秒数，就开始执行倒计时函数。
/*
 componentDidMount() {
    const countdown = getCookieValue('secondsremained') ? getCookieValue('secondsremained') : 0; // 获取cookie值
    if (countdown !== undefined && countdown > 0) {
        this.settime(); // 开始倒计时
    }
}
*/
