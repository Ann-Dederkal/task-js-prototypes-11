function BaseMonster(name) {
	this.name = name;
	this.health = 50;
}
BaseMonster.prototype.sayName = function() {
	console.log(this.name + ": here");
}

function  KotoMonster() {
	BaseMonster.apply(this, arguments);
	this.curHealth = 50; 
	this.damage = 5;
}
KotoMonster.prototype = Object.create(BaseMonster.prototype);
KotoMonster.prototype.carap = function(Enemy) {
	Enemy.curHealth -= this.damage;
	console.log(this.name + " damage " + Enemy.name + " on " + this.damage);
};

function PtahoMonster() {
	BaseMonster.apply(this, arguments);
	this.curHealth = 60;
	this.damage = 3;
}
PtahoMonster.prototype = Object.create(BaseMonster.prototype);
PtahoMonster.prototype.kluv = function(Enemy) {
	Enemy.curHealth -= this.damage;
	console.log(this.name + " damage " + Enemy.name + " on " + this.damage);
}


var kotoZavr = new KotoMonster("KotoZavr");
kotoZavr.sayName();
var ptahoZavr = new PtahoMonster("PtahoZavr");
ptahoZavr.sayName();

console.log(kotoZavr.name +": "+ kotoZavr.curHealth +" health");
console.log(ptahoZavr.name +": "+ ptahoZavr.curHealth +" health");

kotoZavr.carap(ptahoZavr);
console.log(ptahoZavr.name +": "+ptahoZavr.curHealth);
ptahoZavr.kluv(kotoZavr);
console.log(kotoZavr.name +": "+kotoZavr.curHealth);
