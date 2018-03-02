import {a} from "./a"
import {Plane} from "./Plane"
import {EnemyPlane} from "./EnemyPlane";

var plane = new Plane();
plane.shoot();

var enemy = new EnemyPlane();
enemy.moveDown();

console.log(a);