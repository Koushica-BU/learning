import { homeHTML } from "./homeHTML";

let homeHandler = (function(){

    let appArea = document.getElementById('app');
    
    let init = function() {
        let html = homeHTML.getHomeHTML();
        appArea.innerHTML = html;
    }

    return {
        init
    }

})();

export {
    homeHandler
}