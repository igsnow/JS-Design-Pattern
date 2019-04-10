// js装饰器模式
let Plan = {
    fire: function () {
        console.log('发送普通导弹')
    }
}

let missDecorator = function () {
    console.log('发射导弹')
}

let fire = Plan.fire
Plan.fire = function () {
    fire()
    missDecorator()
}

Plan.fire()
