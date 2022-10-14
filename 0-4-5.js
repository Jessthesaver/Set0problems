function distance(...args){
        var x1=args[0],
        y1=args[1],
        x2=args[2],
        y2=args[3];
        if(args.length==4){
            return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2))
    }else if(args.length==6){
        var z1=args[2],
        z2=args[5];
        x2=args[3];
        y2=args[4];
        return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2)+((z1-z2)**2))
    }else{
        throw 'Error, number of arguments invalid';
    }
}

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2); // delta = 1
var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622
console.log(delta1);
console.log(delta2);
distance (x1, x2); // should throw an error: Insufficient parameters