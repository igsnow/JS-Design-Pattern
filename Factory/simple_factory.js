/**
 *  模拟使用场景：前端根据用户角色动态生成不同可访问的页面
 * @param role
 * @constructor
 */
let UserFactory = function (role) {
    function User(args) {
        this.name = args.name
        this.page = args.page
    }

    switch (role) {
        case  'superAdmin':
            return new User({name: '超级管理员', page: ['首页', '通讯录', '数据视图', '权限管理']})
            break
        case 'admin':
            return new User({name: '管理员', page: ['首页', '通讯录', '数据视图']})
            break
        case 'visitor':
            return new User({name: '游客', page: ['首页', '数据视图']})
            break
        default:
            throw new Error('参数有误！')
    }
}

let superAdmin = UserFactory('superAdmin')
console.log(superAdmin);
