let homepage= function(){

    
    this.bankManagerLogin_Button_Click=function(){
        let bankManagerLogin_Button=element(by.css('[ng-click="manager()"]')).click();
    }
};

module.exports=new homepage();