function checker(string){
    const regularexpression = /^#([0-9a-fA-F]){6}$/gm;
    if(string.match(regularexpression) != null){
        const test=string.match(/[0-9a-fA-F]{2}/g)//this part decomposes the hex code, the first match just returns the complete code so i couldnt find a way to remove this expression without splitting the string
        const red = parseInt(test[0], 16);
        const green = parseInt(test[1], 16);
        const blue = parseInt(test[2], 16);
        return `rgb( ${red} , ${green} , ${blue} )`;
    }
    else throw new Error('Invalid value')
}

console.log(checker('#00A9F8'));