function distance(...args){
    const x1=args[0];
    const y1=args[1];
    const x2=args[2];
    const y2=args[3];
    if(args.length==4){
        return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2))
    } if(args.length==6){
        const z1=args[2];
        const z2=args[5];
        const x2=args[3];
        const y2=args[4];
        return Math.sqrt(((x1-x2)**2 )+((y1-y2)**2)+((z1-z2)**2))
    }else{
        throw new Error('Error, number of arguments invalid');
    }
}

const x1 = 1, y1 = 2, z1 = 1;
const x2 = 2, y2 = 2, z2 = 4;
const delta1 = distance (x1, y1, x2, y2); // delta = 1
const delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622
console.log(delta1);
console.log(delta2);
distance (x1, x2); // should throw an error: Insufficient parameters