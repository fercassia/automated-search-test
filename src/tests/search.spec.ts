import { test, expect, chromium } from '@playwright/test';
import { SearchPageClass } from '../pages/search-page.page'


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.alura.com.br/'); 
});

test("Searching not found", async({ page }) => {
    let searching = new SearchPageClass(page);
    const searchingValue = 'pipinoglacic';

    await searching.typeSearchText("input[name='query']", searchingValue);
    await searching.pressEnter();

    const text = await searching.searchResult("//div[@class='search-noResult search-noResult--visible']//h2[1]");
    expect(text).toContain(`Não encontramos resultados para ${searchingValue}`);

    await page.screenshot({ path: 'screenshot/not-found-screenshot.png'});
});

test("Searching for JavaScript's courses", async({ page }) => {
    let searching = new SearchPageClass(page);
    const searchingValue = 'JavaScript';

    await searching.typeSearchText("input[name='query']", searchingValue);
    await searching.pressEnter();

    const text = await searching.searchResult("(//div[@class='busca-resultado-container']//h4)");    
    expect(text).toContain(`Curso ${searchingValue}:`);

    await page.screenshot({ path: 'screenshot/javascript-searching-screenshot.png'});
});