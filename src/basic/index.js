const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        deadless:false
    });
    const page = await browser.newPage();
    await page.goto('https://github.com/lucasmsantini');
    await page.screenshot({path:'meugit.png'})
    await browser.close();
})();
