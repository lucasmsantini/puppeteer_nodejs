const puppeteer = require('puppeteer');

const printScreen = async  () => {
    const browser = await puppeteer.launch({
        //headless:false
    });
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height:1080})
    await page.goto('https://github.com/lucasmsantini');
    await page.screenshot({path:'meugit.png'})
    await browser.close();
};

printScreen();