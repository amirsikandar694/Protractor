const { ModuleKind } = require("typescript");

let Wait=function(){

    this.waitTime=function(waitTime){
        let wait=browser.sleep(waitTime)
    }

    this.waitForCSSElement=function(element,time){
        browser.wait(waitFor.presenceOf($(element)), time); 
    }

    this.waitForXPathElement=function(element,time){
        browser.wait(waitFor.presenceOf(element), time); 
    }
};

module.exports=new Wait();