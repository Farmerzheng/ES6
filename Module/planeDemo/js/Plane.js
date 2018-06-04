// 普通飞机功能模块
// 我方飞机和敌方飞机的'基类'

class Plane {

    constructor(bg, size, position) {
        this.bg = bg;
        this.size = size;
        this.position = position
    }

    update() {
        console.log('the plane update')
    }
}

//  导出写好的功能模块
export default Plane