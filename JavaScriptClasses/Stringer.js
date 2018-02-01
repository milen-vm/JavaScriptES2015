class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    get innerString() {
        return this._innerString;
    }

    set innerString(value) {
        this._innerString = value;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            value = 0;
        }

        this._innerLength = value;
    }

    decrease(value) {
        this.innerLength = this.innerLength - value;
    }

    increase(value) {
        this.innerLength = this.innerLength + value;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString
        }

        return this.innerString.substring(0, this.innerLength) + '...';
    }
}

let str = new Stringer('Test', 5);
console.log(str.toString()); //Test

str.decrease(3);
console.log(str.toString()); //Te...

str.decrease(5);
console.log(str.toString()); //...

str.increase(4);
console.log(str.toString()); //Test