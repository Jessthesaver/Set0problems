function calculator(x1,x2,y1,y2,z1=0,z2=0){
    return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2)+((z1-z2)**2))
}

function distance(...args){
    if(args.length==4 || args.length==6){ 
        let x1=args[0];
        let y1=args[1];
        let x2=args[2];
        let y2=args[3];
        if(args.length==4){
            return calculator(x1,x2,y1,y2)
        }
        if(args.length==6){
            let z1=args[2];
            x2=args[3];
            y2=args[4];
            let z2=args[5];
            return calculator(x1,x2,y1,y2,z1,z2)
        }
    }
    if(args.length == 2 && args[0].length>1 && args[0].length == args[1].length && args[0].length<=3){
            let x1=args[0][0];
            let y1=args[0][1];
            let x2=args[1][0];
            let y2=args[1][1];
        if(args[0].length==2){
            return calculator(x1,x2,y1,y2)
        }
        if(args[0].length==3){
            let z1=args[0][2];
            let z2=args[1][2];
            return calculator(x1,x2,y1,y2,z1,z2)
        }
    }
    else{
        throw new Error('Error, invalid operation');
    }
}

console.log(distance (1, 2, 2, 2)); // returns 1 (done as part of exercise 5)
console.log(distance ([1,2], [2,2])); // returns 1
console.log(distance ([1,2], [2,2,4])); // error: incompatible point data