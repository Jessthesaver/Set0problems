var myLib = {
	math: {
		real: {
			add: function (a, b){ return a+b},
			sub: function (a, b){ return a-b},
			mul: function (a, b){ return a*b}
		},
		complex: {
			Num: function (real, img){return [real,img]},
			add: function (a, b){ return [a[0]+b[0],a[1]+b[1]]},
			sub: function (a, b){ return [a[0]-b[0],a[1]-b[1]]},
			mul: function (a, b){ return [(a[0]*b[0])-a[1]*b[1],a[0]*b[1]+a[1]*b[0]]}
              },
              matrix: {
	               add: function (a, b){ 
                    if (size(a)== size(b)) return a+b;
                    else return 'invalid operation';},
	               sub: function (a, b){ 
                    if (size(a)== size(b)) return a-b;
                    else return 'invalid operation';},
	               mul: function (a, b){ /*matrix multiplication*/},
	               eye: function (size){ /*identity matrix*/},
	               dot: function (m, a){/*dot product*/},
	               times:function(a, b){ 
                    for(i in a){
                        let temp = [];
                        for(j in a[i]){
                            temp[i][j]=a[i][j]*b[i][j];
                        }
                    }
                    return temp;}
	       }
	}
};

var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22), 
    myLib.math.real.mul(2,5));

var ans = myLib.math.matrix.times(
myLib.math.matrix.eye (4), 
myLib.math.complex.sub (
        new myLib.math.complex.Num (
               myLib.math.real.add(5,2),
               -3), 
        new myLib.math.complex.Num (3,4)
)
);

//using with
let result;
let res;
let rest;
with(myLib){
    with(math){
        with(real){
            result = sub(add(20,22), mul(2,5));
            
        }
        with(matrix){
            res = times(eye(4), with(complex){
                sub(Num( with(real){
                    add(5,2)
                }), Num(3,4))
            })
        }
        rest = matrix.times(matrix.eye(4),complex.sub(complex.Num(real.add(5,2),complex.Num(3,4))))
    }
}


//without with

let firstproblem;
{
    const {sub,add, mul} = myLib.math.real;
    firstproblem= sub(add(20,22), mul(2,5));
}
let secondproblem;
{
    const {times, eye} = mylib.math.matrix;
    const {sub, Num} = myLib.math.complex;
    const{add} = myLib.math.real;
    secondproblem= times(eye(4),sub(Num(add(5,2),Num(3,4))));

}
