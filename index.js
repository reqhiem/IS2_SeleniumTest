const {Builder, By} = require('selenium-webdriver');

let firstEl = ["20", "120", "34.1", "16"];
let secondEl = ["60", "45", "46", "751.2"];


(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    //Puts an Implicit wait, Will wait for 10 seconds before throwing exception
    await driver.manage().setTimeouts({implicit: 10000});

    //Launch website
    await driver.navigate().to("https://www.calculator.net/");

    //Maximize the browser
    await driver.manage().window().maximize();

    // Click on Math Calculators
    await driver.findElement(By.xpath("/html/body/div[4]/div/table/tbody/tr/td[3]/div[2]/a")).click();

    // Click on Percent Calculators
    await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[2]/tbody/tr/td/div[3]/a")).click();

    for(let i=0; i<firstEl.length; i++){
        // Enter value 10 in the first number of the percent Calculator
        await driver.findElement(By.id("cpar1")).sendKeys(firstEl[i]);

        // Enter value 50 in the second number of the percent Calculator
        await driver.findElement(By.id("cpar2")).sendKeys(secondEl[i]);

        // Click Calculate Button
        await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]")).click();

        // Get the Result Text based on its xpath
        let result = await driver.findElement(By.xpath("html/body/div[3]/div[1]/p[2]/font/b")).getText();

        // Print a Log In message to the screen
        console.log(firstEl[i] + "% of " + secondEl[i] +  " is: " + result);

        await driver.navigate().to("https://www.calculator.net/percent-calculator.html");
    }

    

    await driver.close();

})();