const puppeteer = require('puppeteer');
const config = require('../config.json');

const login = async  (usermail, userpass) => {
    const browser = await puppeteer.launch({headless: false , args: ['--window-size=1920,1080']});
    const page = await browser.newPage();
    
    await page.goto('https://www.facebook.com/');
    await page.setViewport({width: 1024, height:768});
    await page.waitFor('input[name="email"]');
    await page.type("#email", config.usermail);
    await page.type("#pass", config.userpass)
    await page.keyboard.press('Enter');

    //await browser.close();
};

login();