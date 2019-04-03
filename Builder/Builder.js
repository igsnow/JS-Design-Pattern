/**
 * @主要由4个部分组成，Product产品类、Builder建造者类、Director指挥者类、客户
 * @需要构建一辆车
 */

// 产品类，造一辆车
function Car() {
    this.name = ''
    this.number = ''
    this.wheel = ''
    this.engine = ''
}

// 构建者类,有专门负责各个部件的工人
function Builder() {
    this.nameBuilder = function () {
        this.name = 'BMW 760LI'
    }
    this.numberBuilder = function () {
        this.number = '88888'
    }
    this.wheelBuilder = function () {
        this.wheel = '防爆胎'
    }
    this.engineBuilder = function () {
        this.engine = 'V12'
    }
    this.getCar = function () {
        let Cars = new Car()
        Cars.name = this.name
        Cars.number = this.number
        Cars.wheel = this.wheel
        Cars.engine = this.engine
        return Cars
    }
}

// 指挥者类，指挥各个部门的工人工作
function Director() {
    this.action = function (builder) {
        builder.nameBuilder()
        builder.numberBuilder()
        builder.wheelBuilder()
        builder.engineBuilder()
    }
}

// 使用方法
let builder = new Builder()
let director = new Director()
director.action(builder)

let newCar = builder.getCar()
console.log(newCar);

