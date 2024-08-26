let autocompleteHTML = (function() {
    let getAutocompleteHTML = function () {
        return `<div class="kbu-autocomplete">
                    <aside>
                        <strong> Autocomplete Search Demo</strong>
                        <p> Implementing Search for the data of user records which includes (Name, email, company name, phone number, address). The order of search results will be in the below order</p>
                        <ul>
                            <li> Name - Starting with search key </li>
                            <li> Name - Contains the search key </li>
                            <li> Any other field data (email,company,address,phone) - Starting with the search key</li>
                            <li> Any other field data (email,company,address,phone) - Containing the search key</li>
                        </ul>
                    </aside>
                    <div class="kbu-search-wrap">
                        <div class="kbu-search"><input class="kbu-input" type="text" placeholder="Type here to search.." id = "searchuser"></div>
                        <div class="kbu-result" id = "result">
                        </div>
                    </div>
                </div>`
    }    

    return {
        getAutocompleteHTML
    };
})();

export { autocompleteHTML };