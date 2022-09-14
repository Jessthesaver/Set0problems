class Shape {
    constructor(edges){
        this.pedges= edges;
    } 
    fndisplay(){
        return this;
    }
}

class Quadrilateral extends Shape {
    fnarea(){
        return this.pedges[0]*this.pedges[1];
    }

    fnperimeter(){
        perimeter=0;
        for (i in pedges){
            perimeter += pedges[i];
        }
        return perimeter;
    }
} 

class Square extends Quadrilateral {
    fnarea(){
        return this.pedges[0]**2;
    }

    fnperimeter(){
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
