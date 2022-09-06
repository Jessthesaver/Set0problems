function Datatypes(...args){
    let result = '';
    for (const i of args){
        result += typeof(i) + ' ';   
    }
    return result;
}

console.log(Datatypes(1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {}));