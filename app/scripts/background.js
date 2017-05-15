

function injectSideBar() {

    browser.tabs.executeScript({
        file:'scripts/entry.js'
    });

}



/*
Inject sidebar when the page action is clicked.
*/
browser.browserAction.onClicked.addListener(injectSideBar);
