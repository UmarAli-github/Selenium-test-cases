const {Builder, By, Key, until} = require("selenium-webdriver");

let Chrome = require('selenium-webdriver/chrome');
let options = new Chrome.Options()

async function logoutUser(){

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options.addArguments("headless")).build()

    console.log("-------------------------Starting Test Case 5----------------------\n");


    console.log("Test Case Statement: \n\nLogging out user after logging in with credentials ---> \n"+
    "Email: test@test.com\n"+"Password: test123\n\n")


    console.log("Step-1: Opening Registeriation page of our containerized web application from Assignment-2\n");

        await driver.get("http://44.203.123.244:3000/login");

        await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));


    console.log("Step-2: Setting Email ---> test@test.com\n");

        await driver.findElement(By.xpath('//*[@id="form"]/input[1]')).sendKeys("test09@test.com");

    
    console.log("Step-3: Setting Password ---> tester\n");

        await driver.findElement(By.xpath('//*[@id="form"]/input[2]')).sendKeys("tester123");

    
        
    console.log("Step-4: Clicking Login Button\n");

    await driver.findElement(By.xpath('//*[@id="form"]/input[3]')).click();
        


    console.log("Step-5: Getting title of page after clicking login to check whether user is successfully logged in to our containerized web application from Assignment-2\n");

    await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/center/table/tbody/tr[1]/td[1]')),10000);

    await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));
    
    
  
  
    console.log("Step-6: Getting name of user logged to our containerized web application from Assignment-2\n");

    await driver.findElement(By.xpath('/html/body/div/div[2]/center/table/tbody/tr[1]/td[2]'))
    .getText()
    .then( title => console.log("           <<<Name ---> "+title+">>>\n"))
           


    console.log("Step-7: Getting email of user logged to our containerized web application from Assignment-2\n");

    await driver.findElement(By.xpath('/html/body/div/div[2]/center/table/tbody/tr[2]/td[2]'))
    .getText()
    .then( title => console.log("           <<<Email ---> "+title+">>>\n"))

    

    console.log("Step-8: Clicking Logout Button\n");

    await driver.findElement(By.xpath('/html/body/div/div[3]/a')).click();
     


    console.log("Step-9: Getting title of page after clicking logout to check whether user is successfully logged out of our containerized web application from Assignment-2\n");

    await driver.wait(until.elementLocated(By.xpath('//*[@id="form1"]/input[1]')),10000);

    await driver.getTitle()
        .then( title => console.log("           <<<The Title of your page is ---> "+title+">>>\n"));
    
    

    console.log("-------------------------Ending Test Case 5-------------------------");

    await driver.quit();
}

logoutUser();