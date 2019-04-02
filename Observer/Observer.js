/** 小张最近看上一套房子，但是去看房时，房子已经售罄，售楼人员告知小张下个月还有一处楼盘，
 *于是把电话留在售楼处的花名册上，售楼人员答应一开盘就开始遍历花名册，依次发送短信
 */

// 定义售楼处
let salesOffices = {}
// 售楼花名册
salesOffices.clientList = []
// 订阅售楼消息的函数
salesOffices.listen = function (fn) {
    this.clientList.push(fn)
}
// 发布售楼消息的函数
salesOffices.trigger = function () {
    // 遍历花名册，给留电话的用户发短信
    for (let i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments)
    }
}
// 小张订阅售楼消息
salesOffices.listen(function (price) {
    console.log('小张，price = ' + price)
})
// 小李订阅售楼消息
salesOffices.listen(function (price) {
    console.log('小李，price  = ' + price)
})

// 售楼处发布售楼消息
salesOffices.trigger('88平', 200000)
salesOffices.trigger('110平', 300000)
