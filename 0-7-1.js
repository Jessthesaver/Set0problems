// this expresion checks if the string is a hex color #(?:[0-9a-fA-F]{3}){1,2}

function checker(string){
    let regularexpression = /#(?:[0-9a-fA-F]{3}){1,2}$/i;
    if(string.match(regularexpression) != null){
        let test=string.match(/[0-9a-fA-F]{2}/g)
        let red = parseInt(test[0], 16);
        let green = parseInt(test[1], 16);
        let blue = parseInt(test[2], 16);
        return `rgb( ${red} , ${green} , ${blue} )`;
    }
    else throw new Error('Invalid value')
}

console.log(checker('#00A9F8'));