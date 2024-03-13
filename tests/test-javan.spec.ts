import { test } from '@playwright/test';

test('Successfully displayed job tracking details by entering the wrong email', async ({ page }) => {
  //open the  website
  await page.goto('https://javan.co.id/');

//Click Career Menu
  await page.getByRole('link', { name: 'Career' }).click();

  //Click button Track your Application
  await page.getByRole('button', { name: 'Track your Application' }).click();

  //Click the ID Tracking label and input valid ID Tracking
  await page.getByLabel('ID Tracking').click();
  await page.getByLabel('ID Tracking').fill('2ddbbd40-d9fe-11ee-9d01-0050564f0bdf');

  //Click the Email label and input invalid Email
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('2@gmail.com');

  //Click button Tracking
  await page.getByRole('button', { name: 'Tracking' }).click();

  //The website successfuly display Detail job Tracking  Page
  await page.getByRole('heading', { name: 'Tracking Detail:' }).click();

  //The website successfully displays detailed job tracking data
  await page.getByText('ID Tracking : 2ddbbd40-d9fe-').click();
});