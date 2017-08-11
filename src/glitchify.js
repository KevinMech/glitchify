(function(){

    function onExecuted(result){
        console.log('success!');
    }

    function onError(error){
        throw error;
    }

    function glitchify(){
        var script = browser.tabs.executeScript({
            file: "content_scripts/background_change.js"
        });
        script.then(onExecuted, onError);
    }

    browser.browserAction.onClicked.addListener(glitchify);
    
})();
