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

    this.eat = function (eat) {
        health += 4;
        beauty += 4;
        pleasure += 9;
        security += 2;
        actions += 0;
        leisure += 0;
        console.log(this.name + ' ням-ням ');

        toHelp('health');

        if (Math.random()*10 > 5) {
            alert('tasty dinner x 2 to pleasure');
            pleasure += 9;
        }

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.drink = function (beverages) {
        health += 2;
        beauty += 4;
        pleasure += 5;
        security += 2;
        actions += 0;
        leisure += 0;
        console.log(this.name + ' мммм ');

        toHelp('beauty');

        if (Math.random()*10 > 5) {
            alert('tasty dinner x 3 to beauty');
            beauty += 4;
        }

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
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

        if (Math.random()*10 > 5) {
            alert('fell asleep and did not wake up');
            health = 0;
            beauty = 0;
            pleasure = 0;
            security = 0;
            actions = 0;
            leisure = 0;

        }

        live ();

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.purr = function (mur) {
        health += 1;
        beauty += 1;
        pleasure += 9;
        security += 0;
        actions += 0;
        leisure += 0;
        console.log(this.colour + this.view + this.name + ' мрррр ');

        toHelp('pleasure');

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.walk = function (walk) {
        health += 5;
        beauty += 5;
        pleasure += 9;
        security += 1;
        actions += 0;
        leisure += 1;
        console.log(this.name + ' гуляє ');

        toHelp('leisure');

        if (Math.random()*10 > 5) {
            alert('abducted = 0 security');
            security = 0;
        }

        live ();

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.bite = function (bite) {
        health += 0;
        beauty -= 5;
        pleasure -= 10;
        security += 0;
        actions += 1;
        leisure -= 1;
        console.log(this.view + ' aaйй ');

        if (Math.random()*10 > 5) {
            alert('this time I forgive = 0 actions');
            actions = 0;
        }

        live ();

        return ' health '+ health + ' \n ' +
            ' beauty '+ beauty + ' \n ' +
            ' pleasure '+ pleasure + ' \n ' +
            ' security ' + security + ' \n ' +
            ' actions ' + actions + ' \n ' +
            ' leisure ' + leisure + ' \n '
    };

    this.help = function () {
        console.log('Angela is an animal who can perform such commands: ' + ' \n ' +
            ' "Angela.eat()" ' + ' \n ' +
            ' "Angela.drink()" ' + ' \n ' +
            ' "Angela.sleep()" ' + ' \n ' +
            ' "Angela.purr()" ' + ' \n ' +
            ' "Angela.walk()" ' + ' \n ' +
            ' "Angela.bite()" ' + ' \n ' +
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

    var live = function () {
        if (actions >= 1) {
            alert('Game OVER!');
            console.clear()
        }
        if (security <= 0) {
            alert('Game OVER!');
            console.clear()
        }
        if (health <=0) {
            alert('Game OVER!');
            console.clear()
        }
    }
}

var Angela = new Cat ('Angela', 'one Jear', 'animal', 'white');
Angela.help();


