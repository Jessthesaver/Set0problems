let one = function(d) { // first function
    console.log('potato');
}
let two = function(d) { // second function
    console.log('turnip')
}
let third = function(d){
    console.log('nappa')
}

function centralTimer() {
    let count = 0;
    setInterval(()=>{
        count++
        if(count % 2 === 0) one();
        if(count % 4 === 0) two();
        if(count % 5 === 0) third();
    }, 100*15)
}

centralTimer();