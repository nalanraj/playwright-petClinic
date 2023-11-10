// @ts-check
const ownerData = require('../test-data/ownerData.json');

exports.AddOwnerPage = class AddOwnerPage {
    constructor(page) {
      this.page = page;
      this.url = '/owners/new';
      /** Selectors */
      this.firstName = '#firstName';
      this.lastName = '#lastName';
      this.address = '#address';
      this.city = '#city';
      this.telephone = '#telephone';
      this.addNewOwnerBtn = '.btn';
    }
  
    /**
     * Visit Add new owner page
     */
    async visitPage() {
      await this.page.goto(this.url, { timeout: 10000 });
      await this.page.waitForLoadState('load');
    }
  
    /**
     * Fill new owner details
     */
    async fillOwnerDetails(ownerData) {
      await this.page.type(this.firstName, ownerData.firstName);
      await this.page.type(this.lastName, ownerData.lastName);
      await this.page.type(this.address, ownerData.address);
      await this.page.type(this.city, ownerData.city);
      await this.page.type(this.telephone, ownerData.telephone);
    }
  
    /**
     * Add the new owner
     */
    async addNewOwner() {
      await this.page.click(this.addNewOwnerBtn);
    }
  };
  