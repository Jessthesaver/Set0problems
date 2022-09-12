var timers = {

    timerID: 0,
    timers: [],

    add(fn) { 
        this.timers.push(fn);
    },

    start() {
        //if(this.timerID) return;
        (function runNext() {
            if(timers.timers.length > 0) {
               for (var i = 0; i < timers.timers.length; i++) {
                 if(timers.timers[i]() === false) {
                   timers.timers.splice(i,1);
                   i--;
                 }
              } 
    console.log("setting timeout.");
    timers.timerID = setTimeout(runNext, 0);
       }
     })();
    },

    stop() {
        clearTimeout(this.timerID);
        this.timerID = 0;
    }
};

timers.add(function() {
    console.log('First done');
});

timers.add(function() { 
    console.log('Second done');
});

console.log("starting timer.");