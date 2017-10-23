function Cat (name, age, view, colour ) {
    this.name = name || 'name';
    this.age = age || 'age';
    this.view = view || 'view';
    this.colour = colour || 'colour';

    var health = 0;
    this.eat = function (fish) {
        health++;
        console.log(this.name  + ' їсть ' + fish + ' ням-ням ')
    };
    this.becomeHealthier = function () {
        return health
    };

    var beauty = 0;
    this.drink = function (beverages) {
        beauty++;
        console.log(this.name  +  " п'є "  +  beverages  +  ' мммм ' )
    };
    this.rejuvenate = function () {
        return beauty
    };

    var security = 0;
    this.sleep = function (hause) {
        security++;
        console.log(this.name  +  ' спить ' + hause + ' шшшшшшш ')
    };
    this.secure = function () {
        return security
    };

    var pleasure = 0;
    this.purr = function (mur) {
        pleasure++;
        console.log(this.colour + this.view + this.name + ' муркає ' + mur + ' мрррр ')
    };
    this.satisfied = function () {
        return pleasure
    };

    var leisure = 0;
    this.walk = function (walk) {
        leisure++;
        console.log(this.name + ' гуляє ' + walk)
    };
    this.play = function () {
        return leisure
    };


    var actions = 0;
    this.bite = function (bite) {
        actions++;
        console.log(this.view  +  bite  + ' кусається  aaйй ')
    };
    this.misbehave = function () {
        return actions
    };
}
var Angela = new Cat ('Angela', 'one jear', 'animal', 'white');

Angela.eat('рибку');
Angela.eat('');
console.log('Angela.becomeHealthier',  Angela.becomeHealthier());

Angela.drink('воду');
console.log('Angela.rejuvenate',  Angela.rejuvenate());

Angela.sleep('клубочком');
console.log('Angela.secure',  Angela.secure());

Angela.purr('голосно');
console.log('Angela.satisfied',  Angela.satisfied());

Angela.walk('на вулиці');
console.log('Angela.play',  Angela.play());

Angela.bite('боляче');
Angela.bite('боляче');
Angela.bite('боляче');
Angela.bite('боляче');
Angela.bite('боляче');
Angela.bite('боляче');
console.log('Angela.misbehave', Angela.misbehave());


