import {
    EnemyPlane
} from './EnemyPlane'

import {
    MyPlane
} from './MyPlane'

let enemyPlane = new EnemyPlane('color', 18, 'left', 1000)

let myPlane = new MyPlane('color', 18, 'left', 'right')

enemyPlane.moveDown()

myPlane.shoot()