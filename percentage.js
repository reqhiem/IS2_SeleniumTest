const {Builder, By} = require('selenium-webdriver');

async function percentage(first, second) {
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

    // Enter value 10 in the first number of the percent Calculator
    await driver.findElement(By.id("cpar1")).sendKeys(first);

    // Enter value 50 in the second number of the percent Calculator
    await driver.findElement(By.id("cpar2")).sendKeys(second);

    // Click Calculate Button
    await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]")).click();

    // Get the Result Text based on its xpath
    let result = await driver.findElement(By.xpath("html/body/div[3]/div[1]/p[2]/font/b")).getText();

    await driver.navigate().to("https://www.calculator.net/percent-calculator.html");
    await driver.close();
    return Number(result);

};

module.exports = percentage;
