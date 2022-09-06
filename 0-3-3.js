let myMath={
    add(x,y){
        return x+y;
    },

    mult(x,y){
        return x*y;
    },

    fact(x){
        let total=1;
        for(let i=1; i<=x; i++){
            total *= i;
        }
        return total;
    }
}

console.log(myMath.fact(4));