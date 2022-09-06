function add(...args){
    let total = 0;
    for (const i of args){
        total += i;
    }
    return total;
}

console.log(add (1, 2) + add ( 1, 4, 6, 7, 2));