import {
    Plane
} from './Plane'

class MyPlane extends Plane {
    constructor(bg, size, position, direct) {
        super(bg, size, position);
        this.direct = direct;
    }
    shoot() {
        console.log('myPlane shoot!')
    }
}
export {
    MyPlane
}