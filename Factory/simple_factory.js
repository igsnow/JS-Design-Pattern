/**
 *  模拟使用场景：前端根据用户角色动态生成不同可访问的页面
 * @param role
 * @constructor
 */
let UserFactory = function (role) {
    function SuperAdmin() {
        this.name = '超级管理员'
        this.page = ['首页', '通讯录', '数据视图', '权限管理']
    }

    function Admin() {
        this.name = '管理员'
        this.page = ['首页', '通讯录', '数据视图']
    }

    function Visitor() {
        this.name = '游客'
        this.page = ['首页', '数据视图']
    }

    switch (role) {
        case  'superAdmin':
            return new SuperAdmin()
            break
        case 'admin':
            return new Admin()
            break
        case 'visitor':
            return new Visitor()
            break
        default:
            throw new Error('参数有误！')
    }
}

let superAdmin = UserFactory('superAdmin')
console.log(superAdmin);
