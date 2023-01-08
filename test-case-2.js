const {Builder, By, Key, until} = require("selenium-webdriver");

let Chrome = require('selenium-webdriver/chrome');
let options = new Chrome.Options()

async function registerUser(){

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options.addArguments("headless")).build()

    console.log("-------------------------Starting Test Case 2----------------------\n");


    console.log("Test Case Statement: \n\nRegistering a new user with credentials ---> \n"+
    "Email: test@test.com\n"+"Username: tester\n"+"Password: test123\n\n")


    console.log("Step-1: Opening Registeriation page of our containerized web application from Assignment-2\n");

        await driver.get("http://44.203.123.244:3000/");

        await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));


    console.log("Step-2: Setting Email ---> test@test.com\n");

        await driver.findElement(By.xpath('//*[@id="form1"]/input[1]')).sendKeys("test009@test.com");

    
    console.log("Step-3: Setting Username ---> tester\n");

        await driver.findElement(By.xpath('//*[@id="form1"]/input[2]')).sendKeys("tester1");

    
    
    console.log("Step-4: Setting Password ---> test123\n");

        await driver.findElement(By.xpath('//*[@id="form1"]/input[3]')).sendKeys("tester123");
    
    
    console.log("Step-5: Setting Confirm Password ---> test123\n");

        await driver.findElement(By.xpath('//*[@id="form1"]/input[4]')).sendKeys("tester123");
        
        
    console.log("Step-5: Clicking Register Button\n");

    await driver.findElement(By.xpath('//*[@id="form1"]/input[5]')).click();
        


    console.log("Step-6: Getting title of page after clicking Register to check whether user is successfully added to our containerized web application from Assignment-2 and we have been redirected to the login page\n");

    await driver.wait(until.elementLocated(By.xpath('//*[@id="form"]/input[1]')),10000);

    await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));
           


    console.log("-------------------------Ending Test Case 2-------------------------");

    await driver.quit();
}

registerUser();