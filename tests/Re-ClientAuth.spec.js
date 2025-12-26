import { expect, test } from '@playwright/test';

test("Client Auth E2E", async ({ page }) => {


   
    const userEmail = page.getByPlaceholder("email@example.com");
    const password = page.getByPlaceholder("enter your passsword");
    const loginbtn = page.getByRole("button", { name: 'Login' });
    const card = page.locator(".card-body");
    const emailValue = "test15215@gmail.com";
    const passwordValue = "Past@135";
    const product = "ADIDAS ORIGINAL";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await userEmail.fill(emailValue);
    await password.fill(passwordValue);
    await loginbtn.click();
    await card.locator("b").first().waitFor();
    await card.filter({ hasText: 'ADIDAS ORIGINAL' }).getByRole("button", { name: 'Add To Cart' }).click();
    await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
    await page.locator("div li").first().waitFor();
    // const bool = await page.getByText("ADIDAS ORIGINAL").isVisible();
    await expect(page.getByText(product)).toBeVisible();
    // expect(bool).toBeTruthy();
    // console.log(bool);
    await page.getByRole("button", { name: 'Checkout' }).click();
    await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 })
    const result = page.locator("section.ta-results");
    await result.locator("button").first().waitFor();
    await result.getByRole("button", { name: 'India' }).nth(1).click()
    await page.getByText("Place Order").click();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();

}

)