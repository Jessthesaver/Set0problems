var fns = [];

function delay(ms) { // you can set delay manually to see what happens if functions take longer to execute
    ms += new Date().getTime();
    while (new Date() < ms){}
} 


var one = function(d) { // first function
    console.log('potato');
    delay(0); // let's say our function takes approximately 100 ms to execute
}

var two = function(d) { // second function
    console.log('turnip')
    delay(0);

}
var third = function(d){
    console.log('nappa')
}

fns.push(one);
fns.push(two);
fns.push(third);

var intervals = [5000, 10000, 15000];

var temp = new Date;
(function(fns, intervals) {
var count = 0; // helpers
(function run () {
     // time that function takes to execute 
    if (count === intervals.length-1) {
        fns[count]()
        count = 0;
        setTimeout(run, intervals[count] ); 
    ; // function executes here 
    } else {
        setTimeout(run, intervals[count] );
        fns[count]()
        count++; 
     // function executes here 
    }
})();
//setTimeout(run,intervals[0]) //first call to make use of the first interval
})(fns, intervals)