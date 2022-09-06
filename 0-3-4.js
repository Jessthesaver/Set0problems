class Image {
    constructor(data,x,y,name){
        this.width=x;
        this.height=y;
        this.name= name;
        this.data= data;
    }

    getPixel(x,y){
        return this.data[x,y];
    }
}

var data = new Array (1600); // 40 x 40 px dummy image data
var img = new Image (data, 40, 40, 'myImage');
console.log(img.width); // 40
console.log(img.height); // 40
console.log(img.name); // ‘myImage’
console.log(img.data);
img.getPixel(20, 4); // returns the color of the pixel at that position.

