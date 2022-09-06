class CustomObject{
    constructor(x){
        if(typeof(x)== 'number'){
            this.x=x;
        }
        else{
            return console.log('Invalid operation');
        }
    }
}

let a = new CustomObject(7);
let b = new CustomObject('a');