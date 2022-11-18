const { Page } = require('@playwright/test');

export class SearchPageClass{
    _page;
    
    constructor (page){
        this._page = page;
    }
    
    async typeSearchText(input, searchValue){
        await this.page.type(input, searchValue);
    }

    async pressEnter(){
        await this.page.keyboard.press('Enter');
    }

    async searchResult(locator){
        return this.page.innerText(locator);
    }
}