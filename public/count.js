let counter = (arr) => {
    return `There are ${arr.length} fruits in this array`;
}

let sayName = (name) => {
    return name;
}

let add = (a, b) => {
    return `The value is ${a + b}`;
}

module.exports = {
    counter,
    sayName,
    add
}