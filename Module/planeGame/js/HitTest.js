// 

var HitTest = function() {

}
/*
  test :  判断两个DOM对象是否相撞
  Pramas:
        testA: 第一个DOM对象
        testB: 第二个DOM对象

*/
HitTest.test = function(testA, testB) {
  // 获取到testA 、 testB 的位置
  var rectA = testA.getBoundingClientRect();
  var rectB = testB.getBoundingClientRect();

  // 判断testA 和 testB相撞的情况，相撞就返回true ，不相撞就返回false
  if (rectA.left >= rectB.left && rectA.left <= rectB.right && rectA.top >= rectB.top && rectA.top <= rectB.bottom) {
    return true;
  }
  if (rectA.right >= rectB.left && rectA.right <= rectB.right && rectA.top >= rectB.top && rectA.top <= rectB.bottom) {
    return true;
  }
  if (rectA.left >= rectB.left && rectA.left <= rectB.right && rectA.bottom >= rectB.top && rectA.bottom <= rectB.bottom) {
    return true;
  }
  if (rectA.right >= rectB.left && rectA.right <= rectB.right && rectA.bottom >= rectB.top && rectA.bottom <= rectB.bottom) {
    return true;
  }

    return false;
}