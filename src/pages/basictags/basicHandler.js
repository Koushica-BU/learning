import { basicHTML } from "./basicHTML";

let basicHandler = (function(){

    let appArea = document.getElementById('app');
    
    let init = function() {
        let html = basicHTML.getBasicTagsHTML();
        appArea.innerHTML = html;
    }

    return {
        init
    }

})();

export {
    basicHandler
}