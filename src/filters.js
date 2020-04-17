export const formatDate = (date, fmt) => {
    if (!date) {
        return
    }
    let getDate = new Date(date);
    let o = {
        'M+': getDate.getMonth() + 1,
        'd+': getDate.getDate(),
        'h+': getDate.getHours(),
        'm+': getDate.getMinutes(),
        's+': getDate.getSeconds(),
        'q+': Math.floor((getDate.getMonth() + 3) / 3),
        'S': getDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt;
};
// 数字精度截取处理
export const formatNumberFloor = (number, accuracy) => {
    accuracy = Number(accuracy);
    number = Number(number);
    if (!accuracy) return Math.floor(number * 100000000) / 100000000;
    if (accuracy === 0) return Math.floor(number);
    if (!number || number === 0) {
        return 0;
    } else if (number > 0) {
        let m = Math.pow(10, accuracy)
        return Math.floor(number * m) / m
    } else {
        number = Math.abs(number)
        if (number < 0.0000000001) return 0;
        let m = Math.pow(10, accuracy)
        return '-' + Math.floor(number * m) / m
    }
};