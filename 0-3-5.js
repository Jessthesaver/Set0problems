function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}

function printObjProp(obj, bool=false){
    if(bool==false){
       let result='';
        for(let i in obj){
            if (obj.hasOwnProperty(i)) {
            result += obj.i;
          }
        }
        console.log(result); 
    }else{
        let result='';
        for(let i in obj){
            if (obj.prototype.hasOwnProperty(i) ) {
            result += obj.i;
          }
        }
        console.log(result); 
    }
}

CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj,true); // output: a, b, c
