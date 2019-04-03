/**
 * 之前的简单版本有缺陷，比如小张本来只想订阅88平的房子，但是等有新房源开盘时，售楼处会推送所有的楼盘信息，
 * 这不是小张想要的结果。那么可以能否订阅时多一个参数，使推送结果更加智能。
 * @type {{}}
 */

// 售楼处
let salesOffices = {}
// 花名册
salesOffices.clientList = []
// 订阅时的处理函数
salesOffices.listen = function (key, fn) {
    // 花名册根据key记录用户登记的信息
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}
// 发布消息
salesOffices.trigger = function () {
    let key = Array.prototype.shift.call(arguments)
    let fns = this.clientList[key]
    if (!fns && fns.length === 0) {
        return false
    }
    for (let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}
// 小张订阅88平的楼盘
salesOffices.listen('88平', function (price) {
    console.log('小张，price = ' + price)
})
// 小李订阅88平的楼盘
salesOffices.listen('110平', function (price) {
    console.log('小李，price = ' + price)
})

// 售楼处发布售楼消息
salesOffices.trigger('88平', 20000)
salesOffices.trigger('110平', 30000)
