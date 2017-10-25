function Cat (name, age, view, colour ) {
    this.name = name || 'name';
    this.age = age || 'age';
    this.view = view || 'view';
    this.colour = colour || 'colour';

    var health = 0;
    this.eat = function (eat) {
        health++;
        console.log(this.name + ' ням-ням ');
        toHelp('health')
    };
    this.becomeHealthier = function () {
        return health
    };

    var beauty = 0;
    this.drink = function (beverages) {
        beauty++;
        console.log(this.name  + ' мммм ' );
        toHelp('beauty')
    };
    this.rejuvenate = function () {
        return beauty
    };

    var security = 0;
    this.sleep = function (hause) {
        security++;
        console.log(this.name  + ' шшшшшшш ');
        toHelp('security')
    };
    this.secure = function () {
        return security
    };

    var pleasure = 0;
    this.purr = function (mur) {
        pleasure++;
        console.log(this.colour + this.view + this.name + ' мрррр ');
        toHelp('pleasure')
    };
    this.satisfied = function () {
        return pleasure
    };

    var leisure = 0;
    this.walk = function (walk) {
        leisure++;
        console.log(this.name + ' гуляє ');
        toHelp('leisure')
    };
    this.play = function () {
        return leisure
    };

    var actions = 0;
    this.bite = function (bite) {
        actions++;
        console.log(this.view  + ' aaйй ');
        live()
    };
    this.misbehave = function () {
        return actions
    };

    this.help = function () {
       console.log('Angela is an animal who can perform such commands: ' +
           ' "Angela.eat()" ' +
           ' "Angela.drink()" ' +
           ' "Angela.sleep()" ' +
           ' "Angela.purr()" ' +
           ' "Angela.walk()" ' +
           ' "Angela.bite()" '
       )
    };
    function toHelp (param) {
        if (param === 'health') {
            if (health <= 5) {
                console.log('я голодна')
            } else {
                console.log('досить, пити')
            }
        }
        if (param === 'beauty') {
            if (beauty <= 5) {
                console.log('хочу ще пити')
            } else {
                console.log('досить, спати час')
            }
        }
        if (param === 'security') {
            if (security <= 3) {
                console.log('(((')
            } else {
                console.log(')))')
            }
        }
        if (param === 'pleasure') {
            if (pleasure <= 10) {
                console.log('нема настрою')
            } else {
                console.log('хочу гуляти')
            }
        }
        if (param === 'leisure') {
            if (leisure <= 2) {
                console.log('маловато')
            } else {
                console.log('a тепер би поїсти')
            }
        }
    }
    function live () {
       if (actions >= 5) {
           console.log('Game OVER!')
       }
    }
}
var Angela = new Cat ('Angela', 'one Jear', 'animal', 'white');
Angela.help();



