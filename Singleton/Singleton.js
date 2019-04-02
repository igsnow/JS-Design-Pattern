/**
 * @name 单例模式
 * @desc 确保一个类只对应一个实例
 */
let Sinleton = (function () {
    let _this = null
    return class {
        constructor(name) {
            if (!_this) {
                _this = this
            }
            _this.name = name
            return _this
        }
    }
})()

let s1 = new Sinleton('a')
let s2 = new Sinleton('b')
console.log(s1 === s2);
