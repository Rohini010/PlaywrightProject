import { expect, test } from '@playwright/test';

test("Calendar E2E", async ({ page }) => {

    const year="2027";
    const monthNumber="6";
    const day="28";
    const expectedArray=[monthNumber,day,year];

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator("div.react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();
await page.locator("button.react-calendar__tile").filter({hasText:year}).click();
await page.locator("button.react-calendar__tile").nth(parseInt(monthNumber)-1).click();
await page.locator("abbr",{hasText:day}).click();
await page.pause();
// let value;
const dateArray= page.locator("div.react-date-picker__inputGroup input");
const count = await dateArray.count();
for(let i=0;i<count;i++)
{
    const value=await dateArray.nth(i).inputValue();
// expect(value).toEqual(expectedArray[i]);
console.log(value)
}

})