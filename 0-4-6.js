function distance(...args){

    if(args.length==4){
        x1=args[0];
        y1=args[1];
        x2=args[2];
        y2=args[3];
        return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2))
    }
    if(args.length==6){
        x1=args[0];
        y1=args[1];
        z1=args[2];
        x2=args[3];
        y2=args[4];
        z2=args[5];
        return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2)+((z1-z2)**2))
    }
    if(args.length == 2 && args[0].length>1 && args[0].length == args[1].length && args[0].length<=3){
        if(args[0].length==2){
            x1=args[0][0];
            y1=args[0][1];
            x2=args[1][0];
            y2=args[1][1];
            return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2))
        }
        if(args[0].length==3){
            x1=args[0][0];
            y1=args[0][1];
            z1=args[0][2];
            x2=args[1][0];
            y2=args[1][1];
            z2=args[1][2];
            return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2)+((z1-z2)**2))
        }
    }
    else{
        console.log('Invalid operation');
    }
}

console.log(distance (1, 2, 2, 2)); // returns 1 (done as part of exercise 5)
console.log(distance ([1,2], [2,2])); // returns 1
console.log(distance ([1,2], [2,2,4])); // error: incompatible point data
