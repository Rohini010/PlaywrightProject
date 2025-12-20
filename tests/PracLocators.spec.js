import { expect, test } from '@playwright/test';
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
    await expect(page.locator("a[href*='documents-request']")).toHaveAttribute("class","blinkingText");
    await page.locator("input[value='user']").click();
    await page.locator("select.form-control").selectOption("consult");
    console.log(await page.locator(".modal-content p").textContent());
    await page.locator("#okayBtn").click();
    console.log(await page.locator("input[value='user']").isChecked());
    await expect( page.locator("input[value='user']")).toBeChecked();
    expect(await page.locator("input[value='admin']").isChecked()).toBeFalsy();

    await page.locator("input[type*='checkbox']").click();
    await page.locator("input[value*='Sign']").click();
    console.log(await page.title());
    await card_titles.first().waitFor();
    console.log(await card_titles.allTextContents());

    // console.log(await card_titles.first().textContent()); 
    // await page.locator(a[href='/angularpractice']).click();

});