function centraltimer(fn,timer){
    for(i in fn){
         setTimeout(() => {console.log(fn[i])},timer[i]*1000);
    }
}

function printer(){
    return 'It works!!!';
}

centraltimer( [printer(),printer(), printer()] ,[30,60,75]);