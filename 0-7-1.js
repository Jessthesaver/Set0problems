// this expresion checks if the string is a hex color #(?:[0-9a-fA-F]{3}){1,2}


function checker(string){
    let regularexpression = /#(?:[0-9a-fA-F]{3}){1,2}/g;
    if(string.match(regularexpression) != false){
        red = parseInt(string.substring(1,3), 16);
        green = parseInt(string.substring(3,5), 16);
        blue = parseInt(string.substring(5,7), 16);
        console.log(red);
        console.log(green);
        console.log(blue);
        return `rgb( ${red} , ${green} , ${blue} )`;
    }
}

console.log(checker('#00A9F8'));