// @ts-check
const { test, expect } = require('@playwright/test');

import { FindOwnersPage } from '../pages/FindOwnersPage'
import { AddOwnerPage } from '../pages/AddOwnerPage'
const ownerData = JSON.parse(JSON.stringify(require('../test-data/ownerData.json')));

/*
test('Add a new owner', async ({ page }) => {
  const findOwnersPage = new FindOwnersPage(page)
  const addOwnerPage = new AddOwnerPage(page)
  await findOwnersPage.visitPage()
  await findOwnersPage.goToAddOwner()
  await addOwnerPage.fillOwnerDetails(ownerData)
  await addOwnerPage.addNewOwner()
  await findOwnersPage.verifyOwnerInformation()
  await findOwnersPage.visitPage()
  await findOwnersPage.searchOwner(ownerData)
  
  

});
*/

test('Add and find owner', async ({ page }) => {
  const findOwnersPage = new FindOwnersPage(page);
  const addOwnerPage = new AddOwnerPage(page);

  // Given
  await findOwnersPage.visitPage();

  // When
  await findOwnersPage.goToAddOwner();
  await addOwnerPage.fillOwnerDetails(ownerData);
  await addOwnerPage.addNewOwner();

  // Then
  await findOwnersPage.verifyOwnerInformation();

  // And
  await findOwnersPage.visitPage();
  await findOwnersPage.searchOwner(ownerData);
});