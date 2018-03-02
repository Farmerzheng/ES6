import {Plane} from "./Plane"

class EnemyPlane extends Plane {
	constructor(speed) {
		super(speed)
	}

	moveDown(){
       console.log("敌方飞机向下移动")
	}
}

export {EnemyPlane}