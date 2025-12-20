import { test, expect } from '@playwright/test';


test("Browser context test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(await page.title());
});


test("Page Playwright test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test("Locators practice", async ({ page }) => {

    const username = page.locator("#username");
    const password = page.locator("#password");
    const card_titles = page.locator(".card-body a");

    const usernameValue = "rahulshettyacademy";
    const passwordValue = "learning";

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill(usernameValue);
    await page.pause();
    await password.fill(passwordValue);
    await expect(page.locator("a[href*='documents-request']")).toHaveAttribute("class", "blinkingText");
    await page.locator("input[value='user']").click();
    await page.locator("select.form-control").selectOption("consult");
    console.log(await page.locator(".modal-content p").textContent());
    await page.locator("#okayBtn").click();
    console.log(await page.locator("input[value='user']").isChecked());
    await expect(page.locator("input[value='user']")).toBeChecked();
    expect(await page.locator("input[value='admin']").isChecked()).toBeFalsy();

    await page.locator("input[type*='checkbox']").click();
    await page.locator("input[value*='Sign']").click();
    console.log(await page.title());
    await card_titles.first().waitFor();
    console.log(await card_titles.allTextContents());

    // console.log(await card_titles.first().textContent()); 
    // await page.locator(a[href='/angularpractice']).click();

});

test("Child window handle", async ({ context }) => {
    const page = await context.newPage();
    
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


   const documentLink = page.locator("a[href*='documents-request']");
   const username = page.locator("#username");
    const [newPage]=await Promise.all([
    context .waitForEvent('page'),
        documentLink.click(),
    ]);
const redText=await newPage.locator("p.red").textContent();
console.log( redText);
const text_str=redText.split("@")[1];
const usernameValue=text_str.split(".")[0];
// await page.pause();

await username.fill(usernameValue);
console.log(await username.inputValue());



});


