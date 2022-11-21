const { Page } = require('@playwright/test');

export class SearchPageClass{
    _page;
    
    constructor (page){
        this._page = page;
    }
    
    async typeSearchText(input, searchValue){
        await this._page.type(input, searchValue);
    }

    async pressEnter(){
        await this._page.keyboard.press('Enter');
    }

    async searchResult(locator){
        return this._page.innerText(locator);
    }
}
