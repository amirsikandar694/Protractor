const { ModuleKind } = require("typescript");

let AddCustomerPage=function(){

    this.firstName_Textbox_Type=function(firstname){
        let firstName_Textbox=element(by.xpath('//input[@placeholder="First Name"]')).sendKeys(firstname);
    }

    this.lastName_Textbox_Type=function(lastname){
        let lastName_Textbox=element(by.xpath('//input[@placeholder="Last Name"]')).sendKeys(lastname);
    }
    
    this.postCode_Textbox_Type=function(postcode){
        let postCode_Textbox=element(by.xpath('//input[@placeholder="Post Code"]')).sendKeys(postcode);
    }
    
    this.AddCustomer_Button_Click=function(){
        let AddCustomer_Button=element(by.xpath('//button[@class="btn btn-default"]')).click();
    }



};

module.exports=new AddCustomerPage();