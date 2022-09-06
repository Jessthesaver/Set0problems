function CustomObject (x, y) {
    this.a = x;
    this.b = y;
}

function printObjProp(obj, bool=false){
    if(bool==false){
       let result='';
        for(let i in obj){
            result += i + ' ';
        }
        console.log(result); 
    }else{
        let result='';
        for(let i in obj){
            if (obj.hasOwnProperty(i) ) {
            result += i + ' ';
          }
        }
        console.log(result); 
    }
}

CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj, true); // output: a, b, c
