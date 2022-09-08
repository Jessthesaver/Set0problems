class Shape{
    constructor(pEdges, Edgelenght){
        if(pEdges>=3){ 
            this.pEdges=pEdges;
            this.Edgelenght=Edgelenght
        }else console.log('Invalid shape');
    }
    
    fnDisplay(){
        return this;
    }
    
}



Shape.prototype.fnPerimeter= function(){
    return this.pEdges * this.Edgelenght;
}

Shape.prototype.fnArea = function(){
    return this.pEdges * (this.Edgelenght * this.Edgelenght) * (1/((Math.tan(Math.PI/this.pEdges)))) * 1/4;
}



let hexagon = new Shape(6,2);
console.log(hexagon.fnPerimeter());
console.log(hexagon.fnArea());
console.log(hexagon.hasOwnProperty('fnArea'));


