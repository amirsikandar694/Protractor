let BankManagerPage=function(){

    this.AddCustomer_Button_Click=function(){
        let AddCustomer_Button=element(by.xpath('//button[contains(text(),"Add Customer")]')).click();
    }

    this.OpenAccount_Button_Click=function(){
        let OpenAccount_Button=element(by.xpath('//button[contains(text(),"Open Account")]')).click();
    }

    this.Customer_Button_Click=function(){
        let Customer_Button=element(by.xpath('//button[contains(text(),"Customers")]')).click();
    }

} 
module.exports=new BankManagerPage();