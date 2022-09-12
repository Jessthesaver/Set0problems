var str = '{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, pedro:()=> {return a+b;}}'


//let obj=eval('('+str+')');

let dataParse = (string) => { 
    return Function('string',`return obj = string;`)(string);
}

var obj = dataParse(str);
console.log(dataParse(str));
