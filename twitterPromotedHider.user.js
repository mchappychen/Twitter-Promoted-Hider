// ==UserScript==
// @name         Twitter Promoted Hider
// @version      1
// @description  Hide promoted Tweets
// @author       Michael
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    //Check for promoted tweets every second
    setInterval(function(){
        //For every element with a certain class
        for (let i=0;i<document.getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0").length;i++){
            //Check if it has "Promoted" in its text
            if(document.getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[i].textContent.includes("Promoted")){
                //Hide it
                document.getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display="None"
            }
        }
    },1000);
})();
