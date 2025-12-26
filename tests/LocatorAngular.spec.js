import {test} from '@playwright/test';

test("Locators", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("input.form-control[name='name']").fill("rohini");
    await page.locator("input.form-control[name='email']").fill("test752@gmail.com");
    await page.getByPlaceholder("Password").fill("past@135");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    
await page.getByLabel("Gender").selectOption("Female");

 await page.getByLabel("Employed").check();
 await page.getByRole("button",{name:'Submit'}).click();
 await page.getByRole("link",{name:'Shop'}).click();

 await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();
//  await page.getByRole("button",{hasText:'Checkout/i'}).click();
await page.getByText("Checkout").click();
await page.pause();
})
