class CreateIssuePage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }
       
    InitiatePageElements(){
        this.addNewIssueButton = this.page.getByRole('complementary').locator('svg').nth(2);;
        this.issueTypeDropdown = this.page.locator('.form-group :text("Task")');
        this.issueTypeBug = this.page.locator('div').filter({ hasText: /^Bug$/ }).nth(1);
        this.issuePriority = this.page.locator('div').filter({ hasText: /^Medium$/ });
        this.issuePriorityLow = this.page.locator('nz-option-item').filter({ hasText: /^Low$/ });
        this.summaryInput = this.page.getByRole('textbox').nth(3);
        this.createIssueButton = this.page.getByRole('button', { name: 'Create Issue' });
        this.cancelCreateIssueButton = this.page.getByRole('button', { name: 'Cancel' });
        this.issueCard = this.page.getByText(' test123 ')
    }

    async addNewIssueAndCreate(issueSummary) {
        await this.addNewIssueButton.click();
        await this.issueTypeDropdown.click();
        await this.issueTypeBug.click();
        await this.issuePriority.click();
        await this.issuePriorityLow.click();
        await this.summaryInput.fill(issueSummary)
        await this.createIssueButton.click();
    }

    async getIssueCardText(){    
        return await this.issueCard.innerText();
    }
}

module.exports = {CreateIssuePage};
