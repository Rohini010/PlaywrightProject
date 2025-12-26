import { expect, test } from '@playwright/test';

test("Assertion, Dialog and Frames", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    // await page.pause();
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#alertbtn").click();
    await page.locator("#confirmbtn").click();

    const framePage= page.frameLocator("#courses-iframe");
   await framePage.locator("button.top-4").click();
    await framePage.locator(".items-center a[href*='all-access']:visible").click();
    console.log(await framePage.locator("p.text-xl").first().textContent());
    await page.pause();
});

test.only("Opening New Tab",async({context})=>{
    const page=await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const documentLink=page.locator("a.blinkingText");
    // await page.locator("a.blinkingText").click();
    const newPage=await Promise.all([
        context.waitForEvent(page),
documentLink.click()
    ]);
    console.log(await newPage.locator("p.red").textContent());
    const msg=await newPage.locator("p.red").textContent();
    const arrayText=msg.split("@")[1];
    console.log(arrayText);
    

})