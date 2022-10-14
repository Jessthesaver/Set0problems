// this expresion checks if the string is a hex color #(?:[0-9a-fA-F]{3}){1,2}


function checker(string){
    let regularexpression = /#(?:[0-9a-fA-F]{3}){1,2}/g;
    if(string.match(regularexpression) != false){
        var test=string.match(/[0-9a-fA-F]{2}/g)
        var red = parseInt(test[0], 16),
        green = parseInt(test[1], 16),
        blue = parseInt(test[2], 16);
        return `rgb( ${red} , ${green} , ${blue} )`;
    }
}

console.log(checker('#00A9F8'));