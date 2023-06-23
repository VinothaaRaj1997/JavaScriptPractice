import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>
{
    await page.goto('https://www.boredapi.com/');
}
)
  test('generate three social activities for two people test', async (page) => {
    await page.fill('#participants', '2');
    await page.selectOption('#type', 'social');
    await page.click('#generate');
    const response = await page.waitForResponse('https://www.boredapi.com/api/activity');
    const responseBody = await response.json();

    expect(response.ok()).to.be.true;
    expect(responseBody).to.be.an('object');
    expect(responseBody.activity).to.be.a('string');
    expect(responseBody.type).to.equal('social');
    expect(responseBody.participants).to.equal(2);
  });
