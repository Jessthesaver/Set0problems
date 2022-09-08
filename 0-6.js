class Shape {
    constructor(edges){
        this.pEdges= edges;
    } 
    fnDisplay(){
        return this;
    }
}

class Quadrilateral extends Shape {
    fnArea(){
        return this.pEdges[0]*this.pEdges[1];
    }

    fnPerimeter(){
        perimeter=0;
        for (i in pEdges){
            perimeter += pEdges[i];
        }
        return perimeter;
    }
} 

class Square extends Quadrilateral {
    fnArea(){
        return this.pEdges[0]**2;
    }

    fnPerimeter(){
        return 4*pEdges[0];
    }
}
class Triangle extends Shape {
    height=Math.sqrt(edge **2 + (edge/2)**2);
    
    fnArea(){
        return this.edge[0] * this.height /2;
    }

    fnPerimeter(){
        perimeter=0;
        for (i in pEdges){
            perimeter += pEdges[i];
        }
        return perimeter;
    }
}
