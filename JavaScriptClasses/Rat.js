class Rat {

    constructor(name){
        this.name = name;
        this.united = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.united.push(otherRat);
        }
    }

    getRats() {
        return this.united;
    }

    toString() {
        let result = this.name + '\n';

        for (let i = 0; i < this.united.length; i++) {
            result += `##${this.united[i].name}\n`;
        }

        return result.trim();
    }
}

let test = new Rat('Pesho');
console.log(test.toString());

console.log(test.getRats());

test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));
console.log(test.getRats());

console.log(test.toString());