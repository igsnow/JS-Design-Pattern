// 虚拟代理之送花
/**
 * 虚拟代理是什么：将一些消耗比较大的放到代理中去，比如创建图片dom操作，可以等到判断完毕后再代理里面创建
 */
let Flower = function () {
    this.price = 100
}

let a = {
    sendFlower: function (target) {
        target.receiveFlower(Flower)
    }
}

let b = {
    receiveFlower: function (flower) {
        flower = new flower()
        if (flower.price < 200) {
            console.log('too low')
            return false
        } else {
            c.receiveFlower(flower)
        }

    }
}

let c = {
    receiveFlower: function (flower) {
        console.log('love')
    }
}

a.sendFlower(b)
