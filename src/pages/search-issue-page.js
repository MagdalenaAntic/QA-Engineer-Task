class SearchIssuePage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }
    InitiatePageElements(){
        this.searchIssueItem = this.page.getByRole('complementary').locator('svg').nth(1);
        this.searchInputField = this.page.getByRole('textbox', { name: 'Search issues by summary,' });
        this.issueResult = this.page.getByText('Issues Result Merry Christmas');    
    }

    async searchIssue(searchKeyword) {
        await this.searchIssueItem.click()

        const delayBetweenKeystrokes = 200;
         for (const char of searchKeyword) {
            await this.searchInputField.type(char, {delay: delayBetweenKeystrokes});
         }
    }

    async issueResults(){
        return await this.issueResult.innerText()
    }
}

module.exports = { SearchIssuePage };
