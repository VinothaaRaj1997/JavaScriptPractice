import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>
{
    await page.goto('https://www.moneycorp.com/en-gb/');
}
)

test('Open Url and verify test', async ({ page }) => {
    console.log(await page.title());
    await expect(page).toHaveTitle("Moneycorp | Global Payments");
});

test('Change Language and region to USA test', async ({ page }) => {
    await page.click('#chooseLanguage > a');
    await page.click('a[hreflang="en-us"]');
     await expect(page).toHaveURL("https://www.moneycorp.com/en-us/");
  
  });

  test('Foreign Exchange Solutions test', async ({ page }) => {
  
    await page.click('a:has-text("Find out more"):has([href*="foreign-exchange-solutions"])');
    await expect(page).toHaveTitle("Foreign Exchange Solutions | Moneycorp");
   
  });

  test('International Payments test', async ({ page }) => {
   
    await page.getByRole('textbox', { name: 'Search' }).fill('International Payments');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await expect(page.getByText('Viewing 10 of 127')).toBeVisible();
  
  });

  test('should validate that each article in the list test', async ({page}) => {
    const searchResults = await page.$$('.search-results li');
    for (const result of searchResults) {
      const link = await result.$('a');
      const href = await link.getAttribute('href');
      expect(href).to.startWith('https://www.moneycorp.com/en-us/');
    }
  });