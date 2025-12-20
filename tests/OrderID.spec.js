import {test, expect } from "@playwright/test";


test("Order flow",async({page})=>{
    const userEmail=page.locator("input[id='userEmail']");
        const password=page.locator("input[formcontrolname='userPassword']");
        const loginbtn=page.locator("input[id='login']");
    const card= page.locator(".card-body");
    const card_titles=card.locator("b");
        const emailValue="test15215@gmail.com";
        const passwordValue="Past@135";
        const product="ADIDAS ORIGINAL";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await userEmail.fill(emailValue);
    await password.fill(passwordValue);
    await loginbtn.click();
    // console.log(await page.locator(".card-body b").first().textContent());
    await card_titles.first().waitFor();
    // await page.waitForLoadState('networkidle');
    // await page.pause();

    const titles=await card_titles.allTextContents();
    console.log(titles);
    // for(let i=0;i<titles.length;i++)
    // {
    //     if(titles[i]==product){
    //     await card.nth(i).locator("button.w-10").click();
    //         break;
    //     }
    // }
    // await page.pause();

    for(let i=0;i<titles.length;++i){
        console.log(await card.nth(i).locator("b").textContent());
        if(await card.nth(i).locator("b").textContent()== product){
            await card.nth(i).getByText("Add To Cart", { exact: true }).click();
            break; 
        }
    }

    await page.locator("button[routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();
    //Cart items
    // const cart=page.locator("li.items h3").textContent();
   const bool= await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
   expect(bool).toBeTruthy();
   console.log(bool);
    //    await page.pause();
  
    // await expect(page.locator("li.items h3")).toContainText(product);
    await page.locator(".subtotal ul button").click();
    await expect( page.locator(".user__name input.ng-untouched")).toHaveValue(emailValue);
     await page.locator(".small input.txt").first().fill("033");
    await page.locator(".small input.txt").nth(1).fill("rahulshettyacademy");
    // await page.locator("input[name='coupon']").click();
    await page.locator("button.mt-1").click();
    await page.locator("p.mt-1").waitFor();
    // await expect(page.locator("p.mt-1").textContent()).("Coupon Applied");
    await expect(page.locator("p.mt-1")).toContainText("Coupon Applied");
    // await page.pause();
    await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 

    const result=  page.locator("section.ta-results");
    await result.locator("button").first().waitFor(); 
        // await page.pause()
        // await page.pause();
    // await page.locator("section.ta-results").first().waitFor();
    const countryCount= await result.locator("button").count();
    // console.log(country)
    for(let j=0;j<countryCount;++j){
       
        const countryName=await result.locator("button").nth(j).textContent();
        console.log(countryName);
        if(countryName ==" India"){
            await result.locator("button").nth(j).click();
            break;
        }
    }
    

await expect(page.locator(".ta-backdrop")).toBeHidden();
    
    // await page.locator(".action__submit").click();
    // await page.pause();
     await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   
   
   console.log(await page.locator(".ng-star-inserted .em-spacer-1").nth(3).textContent());
   const orderID=await page.locator(".ng-star-inserted .em-spacer-1").nth(3).textContent();
   await page.locator("button[routerlink*='orders']").click();

   await page.locator("tbody tr.ng-star-inserted").first().waitFor();
   const orderRows=await page.locator("tbody tr.ng-star-inserted");
  const orderCount= await orderRows.count();
  for(let i=0;i<orderCount;i++)
  {
    const orderText=await orderRows.nth(i).locator("th").textContent();
    if(orderID.includes(orderText)){
        await orderRows.nth(i).locator(".btn-primary").first().click();
        break;
    }
  }
  const orderIDDEtails=await page.locator("div.col-text").textContent();
  expect(orderID.includes(orderIDDEtails)).toBeTruthy();
   await page.pause();
})