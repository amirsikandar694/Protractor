let homepage=require('../PageObject/HomePage')
let BankManagerPage=require('../PageObject/BankManagerPage')
let AddCustomerPage=require('../PageObject/AddCustomerPage');
let Wait=require('../Utilities/Wait');
const { waitTime } = require('../Utilities/Wait');

describe("Add Customer to banking app",function(){

    it("Add new cutomer",function(){
        console.log("Launch Browser");
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.driver.manage().window().maximize();
        homepage.bankManagerLogin_Button_Click();
        BankManagerPage.AddCustomer_Button_Click();
        AddCustomerPage.firstName_Textbox_Type("Amir");
        AddCustomerPage.lastName_Textbox_Type("Sikandar");
        AddCustomerPage.postCode_Textbox_Type("412114");
        AddCustomerPage.AddCustomer_Button_Click();
        Wait.waitTime(2000);
        browser.switchTo().alert().accept();
    })
});