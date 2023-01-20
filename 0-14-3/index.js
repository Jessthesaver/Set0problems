const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = () => {
    const routes = [ ];
    routes.push( { path: "#", view: 0 })
    fetch('./template1.json')
        .then((response) => response.json())
        .then((json) => {
            for(let i=0;i<json.length;i++){
                routes.push({ path: `#article${i+1}`, view: i+1 })
            }
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
            app.appendChild(loadcontent(view,json))
        })

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

function loadcontent(view,json){
    if(view==0){
        let firstpart= new DocumentFragment();
        for(let i = 0 ; i< json.length ; i++){ 
            const template= document.getElementById('template1')
            const clone = template.content.cloneNode(true)
            let a= clone.querySelector('a')
            a.href=`#article${json[i].id}`;
            let img=clone.querySelector('img')
            img.src=`${json[i].img}`
            let h1=clone.querySelector('h1')
            h1.innerText=json[i].title
            let p=clone.querySelector('p')
            p.innerText=json[i].text
            firstpart.appendChild(clone);
        }
        return firstpart;
    }if(view>0){
        let firstpart= new DocumentFragment(); 
        const template= document.getElementById('template2')
        const clone = template.content.cloneNode(true)
        let img=clone.querySelector('img')
        img.src=`${json[view-1].img}`
        let h1=clone.querySelector('h1')
        h1.innerText=json[view-1].title
        let p=clone.querySelector('p')
        p.innerText=json[view-1].text
        firstpart.appendChild(clone);
        return firstpart;
    }
}
