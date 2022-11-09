import template1 from './template1.json' assert { type: "json" };

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = () => {
    const routes = [
        { path: "#", view: 0 },
        { path: "#article1", view: 1 },
        { path: "#article2", view: 2},
        { path: "#article3", view: 3 }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch:location.hash===route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = match.route.view;

    const app=document.querySelector("#app");
    app.innerHTML=''
    app.appendChild(loadcontent(view))
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

const templates=document.querySelectorAll('template');

function loadcontent(view){

    if(view==0){
        let firstpart= new DocumentFragment();
        for(let i = 0 ; i< template1.length ; i++){ 
            let a= document.createElement('a');
            a.setAttribute('data-link',true);
            a.href=`#article${template1[i].id}`;
            let div=document.createElement('div');
            div.id=template1[i].id; 
            div.className="setimgtext"
            div.innerHTML= `<img src="${template1[i].img}" width=500px> <div class="justtext"> <h1> ${template1[i].title} </h1> <p> ${template1[i].text}</p></div>
            `;
            a.appendChild(div);
            firstpart.appendChild(a);
        }
        return firstpart;
    }if(view>0){
        let firstpart= new DocumentFragment(); 
        let div=document.createElement('div');
        div.id=template1[view-1].id; 
        div.className="setimgtext"
        div.innerHTML= `<img src="${template1[view-1].img}" width=500px> <div class="justtext"> <h1> ${template1[view-1].title} </h1> <p> ${template1[view-1].text}</p></div>
        <a href="#" data-link><input type="button" value="Click to return to the first page"></a>`;
        firstpart.appendChild(div);
        return firstpart;
    }
}
