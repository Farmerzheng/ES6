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

export {
    Plane
}