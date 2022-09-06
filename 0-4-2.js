function addarray(array, i=0, j=0){
    x=i;
    y=j;
    array=array;
    if(array[x]){
        return addarray(array,x+1,y+array[x]);
    }else{
        return y;
    }
}

let arr = [ 1, 3, 5, 7];
console.log(addarray(arr));