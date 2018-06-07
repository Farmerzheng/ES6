import {
    Plane
} from './Plane'

class EnemyPlane extends Plane {
    constructor(bg, size, position, speed) {
        super(bg, size, position);
        this.speed = speed;
    }
    moveDown() {
        console.log('enemyPlane can moveDown')
    }
}

export {
    EnemyPlane
}