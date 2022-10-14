var str = '{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, pedro:()=> {return a+b;}}'

function dataParse(string){ 
    return Function('string',`return  ${string};`)(string);
}

var obj = dataParse(str);
console.log(obj.prop1)
console.log(obj);
