import { expect } from "@playwright/test";

// @ts-check
export class FindOwnersPage {
	constructor(page) {
	  this.page = page;
	  this.url = '/owners/find';
	  /** Selectors */
	  this.addOwnerBtn = 'a.btn';
	  this.ownerInformationClass = '.container-fluid';
	  this.ownerInformationTxt = 'Owner Information';
	  this.lastNameInput = '#lastName';
	  this.findOwnerBtn = '.col-sm-offset-2 > .btn';
	  this.ownerResultTxt = 'Owners';
	}
  
	/**
	 * Visit Find owners page
	 */
	async visitPage() {
	  await this.page.goto(this.url);
	}
  
	/**
	 * Go to add owner page by clicking on add owner button
	 */
	async goToAddOwner() {
	  await this.page.click(this.addOwnerBtn);
	}
  
	/**
	 * Verify if owner information is displayed
	 */
	async verifyOwnerInformation() {
	  await this.page.waitForSelector(this.ownerInformationClass);
	  await expect(this.page.locator(this.ownerInformationClass)).toContainText(this.ownerInformationTxt);


	}
  
	/**
	 * Search for owner by last name
	 */
	async searchOwner(ownerLastName) {
	  await this.page.type(this.lastNameInput, ownerLastName.lastName);
	  await this.page.click(this.findOwnerBtn);
	  await this.page.waitForSelector(this.ownerInformationClass);
	  await expect(this.page.locator(this.ownerInformationClass)).toContainText(this.ownerResultTxt);

	}
  }
  