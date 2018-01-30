function greatestCommonDivisor(a, b) {
    let divider = Math.min(a, b);
    let divided = Math.max(a, b);

    let rest = divided % divider;

    if (rest === 0) {
        return divider;
    } else {
        return greatestCommonDivisor(divider, rest);
    }
}

let result = greatestCommonDivisor(18, 84);
console.log(`Greatest Common Divisor 18, 84 -> ${result}`);

result = greatestCommonDivisor(252, 105);
console.log(`Greatest Common Divisor 252, 105 -> ${result}`);

function gcd(a, b) {
   if (b === 0) {
       return a;
   }

    return gcd(b, a % b);
}

let res = gcd(105, 252);
console.log(res);