/**
 * @name 代理模式
 * @desc 为其他对象提供一种代理以控制对这个对象的访问
 */

/** eg.公司(Company)通过经纪人(agent)找明星(start)开演唱会 */
//演唱会
let Concert = function () {
}
//公司
let Company = {
    askForConcert: function (target) {
        let concert = new Concert();
        target.openConcert(concert)
    }
}

//经纪人代理
let Agent = {
    openConcert: function (concert) {
        Star.openConcert(concert)
    }
}

//明星
let Star = {
    openConcert: function (concert) {
        console.log("明星同意开一场演唱会")
    }
}

//执行
Company.askForConcert(Agent);  //=>明星同意开一场演唱会
