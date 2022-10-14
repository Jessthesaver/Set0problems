
var trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
function Datatypes(...args){
    let result = '';
    for (const i of args){
        var type=trueTypeOf(i);
        if(type=='number'){
            if( Number.isInteger(i)){
                result +=  type+ ' ';
            }
            else{
                result +=  'float'+ ' ';
            }
        }else{
            result +=  type+ ' ';
        }    
    }
    return result;
}
console.log(Datatypes(1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {}));