import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: "new"
  });
  const page = await browser.newPage();
  await page.goto('https://svrn-alpha.vercel.app/', {waitUntil: 'networkidle0'});
  await new Promise(r => setTimeout(r, 2000));
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  await browser.close();
})();
