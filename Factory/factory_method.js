//  工厂方法函数，只负责实例化
let UserFactory = function (role) {
    if (this instanceof UserFactory) {   // 安全模式实例化？？？
        return new this[role]();
    } else {
        return new UserFactory(role);
    }
}
//工厂原型中设置创建所有类型数据对象的基类
UserFactory.prototype = {
    SuperAdmin: function () {
        this.name = '超级管理员'
        this.page = ['首页', '通讯录', '数据视图', '权限管理']
    },
    Admin: function () {
        this.name = '管理员'
        this.page = ['首页', '通讯录', '数据视图']
    },
    Visitor: function () {
        this.name = '游客'
        this.page = ['首页', '数据视图']
    }
}

let superAdmin = UserFactory('SuperAdmin');
console.log(superAdmin);
