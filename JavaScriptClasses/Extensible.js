let extensible = (function () {
    let id = 0;

    return class Extensible {

        constructor() {
            this.id = id++;
        }

        extend(templeat) {
            for (let prop in templeat) {
                if (typeof templeat[prop] === 'function') {
                    Extensible.prototype[prop] = templeat[prop];
                } else {
                    this[prop] = templeat[prop];
                }
            }
        }
    }
})();

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);