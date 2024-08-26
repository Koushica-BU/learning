import { routes } from './routes.js';

let Routing = function() {
    let url = window.location.href;
    let hash = url.split('#')[1];
    var route = routes[0];
    for (var index = 0; index < routes.length; index++) {
        var testRoute = routes[index];
        if (hash == testRoute.url) {
            route = testRoute;
        }
    }
    route.callback();
}

export {
    Routing
}