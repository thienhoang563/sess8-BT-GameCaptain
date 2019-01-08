/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  };
  this.moveRight = function () {
    this.left += this.speed;
  };
  this.moveUp = function () {
    this.top -= 10;
  };
  this.moveDown = function () {
    this.top += 10;
  };
  this.moveLeft = function () {
    this.left -= 10;
  }
}
  var hero = new Hero('captain.png',0,20,200,10);
  function start() {
    if (hero.left < window.innerWidth && hero.top ===0){
      hero.moveRight();
    } 
    if (hero.left >window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
      hero.moveDown();
    } 
    if (hero.top > window.innerHeight - hero.size && hero.left >0){
      hero.moveLeft();
    }
    if (hero.top < window.innerHeight && hero.left ===0){
      hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start,40);
  }
  start();