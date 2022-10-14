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
    let templatecontent=templates[view];
    let clone = templatecontent.content.cloneNode(true);
    return clone
}
