// 将如下代码改写成ES6的形式

var zhangsan = {
    name: 'zhangsan',
    age: 18,
    speak: function() {

    },
    eat: function() {

    }
}

function Plane(name, speed) {
    this.name = name;
    this.speed = speed;
}
Plane.prototype = {
    shoot: function() {
        console.log(this.name + 'shoot')
    }
}

function EnemyPlane(name, speed, color) {
    this.name = name;
    this.speed = speed;
    this.color = color;
}

EnemyPlane.fly = function() {
    console.log('enemyPlane can fly')
}

EnemyPlane.prototype = new Plane();

EnemyPlane.prototype.moveDown = function() {
    console.log('enemyPlane can move down')
}