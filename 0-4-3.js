class CustomObject{
        #property= 7
        set prop(value){
            if(typeof(value)=='number'){ 
                this.#property = value;
            }else{
                throw 'error'
            }
        }
        get prop(){
            return this.#property;
        }
}

var obj = new CustomObject()
obj.prop='f'
console.log(obj.prop)

