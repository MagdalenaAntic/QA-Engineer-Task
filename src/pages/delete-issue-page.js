class DeleteIssuePage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }

    InitiatePageElements(){
        this.issueCardItem = this.page.getByText('What is Angular Jira clone application? Task-');
        this.buttonTrash = this.page.locator('j-button[icon*="trash"]');
        this.deleteModal = this.page.locator('issue-delete-modal');
        this.deleteModalButton = this.page.getByRole('button', { name: 'Delete' })
        this.board = this.page.locator('board-dnd');
    }

    async moveIssueToTrash(){
        await this.issueCardItem.click()
        await this.buttonTrash.click() 
        await this.deleteModal.click()
        await this.deleteModalButton.click()  
    }

    async checkDeletedIssue() {
        return await this.board
    }
}
module.exports = { DeleteIssuePage }