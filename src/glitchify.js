function onExecuted(result){
    console.log('success!');
}

function onError(error){
    throw error;
}

function glitchify(){
    var script = browser.tabs.executeScript({
        file: ""
    });
    script.then(onExecuted, onError);
}

(function(){
    browser.browserAction.onClicked.addListener(glitchify);
})();
