function Cat (name, age, view, colour ) {
    this.name = name || 'name';
    this.age = age || 'age';
    this.view = view || 'view';
    this.colour = colour || 'colour';

    var health = 0;
    var beauty = 0;
    var security = 0;
    var pleasure = 0;
    var leisure = 0;
    var actions = 0;

    this.becomeHealthier = function () {
        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.eat = function (eat) {
        health += 4;
        beauty += 4;
        pleasure += 9;
        security += 0;
        actions += 0;
        leisure += 0;
        console.log(this.name + ' ням-ням ');
        toHelp('health');
    };

    this.drink = function (beverages) {
        health += 2;
        beauty += 4;
        pleasure += 5;
        security += 0;
        actions += 0;
        leisure += 0;
        console.log(this.name + ' мммм ');
        toHelp('beauty');
    };

    this.sleep = function (hause) {
        health += 2;
        beauty += 2;
        pleasure += 0;
        security += 4;
        actions += 0;
        leisure += 0;
        console.log(this.name + ' шшшшшшш ');
        setTimeout(alert('Вже поспала )))'), 10000);
        toHelp('security');
    };

    this.purr = function (mur) {
        health += 1;
        beauty += 1;
        pleasure += 9;
        security += 0;
        actions += 0;
        leisure += 0;
        console.log(this.colour + this.view + this.name + ' мрррр ');
        toHelp('pleasure')
    };

    this.walk = function (walk) {
        health += 5;
        beauty += 5;
        pleasure += 9;
        security += 0;
        actions += 0;
        leisure += 1;
        console.log(this.name + ' гуляє ');
        toHelp('leisure')
    };
    this.play = function () {
        return leisure
    };

    this.bite = function (bite) {
        health -= 10;
        beauty -= 5;
        pleasure -= 10;
        security -= 10;
        actions += 5;
        leisure -= 1;
        console.log(this.view + ' aaйй ');
        live()
    };
    this.misbehave = function () {
        return actions
    };

    this.help = function () {
        console.log('Angela is an animal who can perform such commands: ' + ' \n ' +
            ' "Angela.eat()" ' + ' \n ' +
            ' "Angela.drink()" ' + ' \n ' +
            ' "Angela.sleep()" ' + ' \n ' +
            ' "Angela.purr()" ' + ' \n ' +
            ' "Angela.walk()" ' + ' \n ' +
            ' "Angela.bite()" ' + ' \n ' + ' as well as to find out the parameters of the lifestyles to call the team: ' + ' \n ' +
            ' "Angela.becomeHealthier()" ' + ' \n ' +
            ' and in this function on what does life depend: ' + ' \n ' +
            ' live() '
        )
    };

    function toHelp(param) {
        if (param === 'health') {
            if (health <= 5) {
                console.log('я голодна')
            } else {
                console.log('досить, пити');
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

    function live() {
        if (actions >= 5) {
            setTimeout(alert('Game OVER!'), 3000);
            console.clear()
        }
        if (health <= 0 && security <= 0) {
            setTimeout(alert('Game OVER!'), 3000);
            console.clear()
        }
    }

}

var Angela = new Cat ('Angela', 'one Jear', 'animal', 'white');
Angela.help();


