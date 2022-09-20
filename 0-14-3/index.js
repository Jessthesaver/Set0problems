import template1 from "./template1.json" assert { type: "json" };

function firstload(){ 
    document.body.innerHTML= '';
    var firstpart= new DocumentFragment();
    for(let i = 0 ; i< template1.length ; i++){ 
        let a = document.createElement('a');
        a.href= `#${i}`;
        let div=document.createElement('div');
        div.id=template1[i].id; 
        div.className="setimgtext"
        div.innerHTML= `<img src="${template1[i].img}" width=500px> <div class="justtext"> <h1> ${template1[i].title} </h1> <p> ${template1[i].text}</p></div>`;
        div.addEventListener("click",secondload);
        a.appendChild(div);
        firstpart.appendChild(a);
    }
    document.body.appendChild(firstpart);
}

function secondload(){
    document.body.innerHTML='';
    var firstpart= new DocumentFragment(); 
    let div=document.createElement('div');
    div.id=template1[this.id].id; 
    div.className="setimgtext"
    div.innerHTML= `<img src="${template1[this.id].img}" width=500px> <div class="justtext"> <h1> ${template1[this.id].title} </h1> <p> ${template1[this.id].text}</p></div>`;
    let a= document.createElement('a');
    a.href="index.html"
    let button=document.createElement('input');
    button.type= "button";
    button.value="Click to return to the first page";
    a.appendChild(button);
    firstpart.appendChild(div);
    firstpart.appendChild(a);
    document.body.appendChild(firstpart);
}

function refreshload(i){
    document.body.innerHTML='';
    var firstpart= new DocumentFragment(); 
    let div=document.createElement('div');
    div.id=template1[i].id; 
    div.className="setimgtext"
    div.innerHTML= `<img src="${template1[i].img}" width=500px> <div class="justtext"> <h1> ${template1[i].title} </h1> <p> ${template1[i].text}</p></div>`;
    let a= document.createElement('a');
    a.href="index.html"
    let button=document.createElement('input');
    button.type= "button";
    button.value="Click to return to the first page";
    a.appendChild(button);
    firstpart.appendChild(div);
    firstpart.appendChild(a);
    document.body.appendChild(firstpart);
}
var fragment = window.location.hash;
console.log(fragment)
if(fragment){
    refreshload(fragment[1]);
}
else{
    firstload();
}

