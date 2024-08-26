import { homeHandler } from "../pages/home/homeHandler";
import { basicHandler } from "../pages/basictags/basicHandler";
import { autocompleteHandler } from "../pages/autocomplete/autocompleteHandler";

let routes = 
[
    {
        url: '', 
        callback: homeHandler.init
    },
    { 
        url: "basic", 
        callback: basicHandler.init
    },
    { 
        url: "autocomplete", 
        callback: autocompleteHandler.init
    }
]

export {
    routes
}