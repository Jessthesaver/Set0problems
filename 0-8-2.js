let fns = [];

let one = function(d) { // first function
    console.log('potato');
}
let two = function(d) { // second function
    console.log('turnip')
}
let third = function(d){
    console.log('nappa')
}

fns.push(one);
fns.push(two);
fns.push(third);

let intervals = [5000, 10000, 15000];

(function(fns, intervals) {
let count = 0; 
(function run () {
     // time that function takes to execute 
    if (count === intervals.length-1) {
        fns[count]()
        count = 0;
        setTimeout(run, intervals[count] ); // function executes here 
    } else {
        setTimeout(run, intervals[count] );
        fns[count]()
        count++; 
     // function executes here 
    }
})();
//setTimeout(run,intervals[0]) //first call to make use of the first interval
})(fns, intervals)