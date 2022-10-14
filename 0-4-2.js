function addarray(array, i=0, j=0){
    var position=i;
    var accumulated=j;
    if(typeof(array[position])=='number'){
        return addarray(array,position+1,accumulated+array[position]);
    }else{
        return accumulated;
    }
}

let arr = [ 1,2,3,4,5,6];
console.log(addarray(arr));