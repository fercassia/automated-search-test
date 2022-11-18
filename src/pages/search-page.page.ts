import type { Page } from '@playwright/test';

export class SearchPageClass{
    readonly page: Page;
    
    constructor(page:Page){
        this.page = page;
    }
    
    async typeSearchText(input: string, searchValue: string){
        await this.page.type(input, searchValue);
    }

    async pressEnter(){
        await this.page.keyboard.press('Enter');
    }

    async searchResult(locator:string){
        return this.page.innerText(locator);
    }
}