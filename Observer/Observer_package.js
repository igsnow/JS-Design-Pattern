// 对发布订阅模式进行封装
let event = {
    clientList: [],
    listen(key, fn) {
        // 根据key对订阅的对象进行分组
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger() {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.clientList[key]
        if (!fns || fns.length === 0) {
            return false
        }
        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(null, arguments)
        }
    }
}

// 注册事件
function installEvent(obj) {
    for (let i in event) {
        obj[i] = event[i]
    }
}

let salesOffices = {}
installEvent(salesOffices)
salesOffices.listen('88平', function (price) {
    console.log(`小张 prices = ${price}`)
})

salesOffices.trigger('88平', 20000)
