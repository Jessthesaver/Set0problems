class Image {
    constructor(data,x,y,name){
        if(data.length == x*y){
            this.width=x;
            this.height=y;
        }else{
            throw 'Error Parameters dont match the size'
        }
        this.name= name;
        this.data= data;
    }

    getPixel(x,y){
        return this.data[x+y*this.width];
        //in this case im thinking of sending the coordinate to 
        //one dimensiona array as "blocks" where you can 
    }
}


var data = new Array (1600); // 40 x 40 px dummy image data
for(let i=0; i<data.length;i++){
    data[i]=i;
}
var img = new Image (data, 40, 40, 'myImage');
console.log(img.width); // 40
console.log(img.height); // 40
console.log(img.name); // ‘myImage’
console.log(img.getPixel(1, 20)); // returns the color of the pixel at that position.

