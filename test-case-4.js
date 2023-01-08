const {Builder, By, Key, until} = require("selenium-webdriver");

let Chrome = require('selenium-webdriver/chrome');
let options = new Chrome.Options()

async function clickLogin(){

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options.addArguments("headless")).build()

    console.log("-------------------------Starting Test Case 4----------------------\n");

    console.log("Test Case Statement: \n\nTesting Login anchor tag on Registration page to check whether it redirects\n\n")
    
    console.log("Step-1: Opening Registeriation page of our containerized web application from Assignment-2\n");

        await driver.get("http://44.203.123.244:3000/");


    console.log("Step-2: Getting title of page of our containerized web application from Assignment-2\n");

        await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));


    
    console.log("Step-3: Clicking login anchor tag on Registeriation page of our containerized web application from Assignment-2\n");

        await driver.findElement(By.xpath('/html/body/div/div[4]/span/a'))
        .click();

    
    
    console.log("Step-4: Getting title of page after clicking login anchor tag of our containerized web application from Assignment-2\n");

        await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));
        


    console.log("-------------------------Ending Test Case 4-------------------------");

    
    
    await driver.quit();
}

clickLogin();