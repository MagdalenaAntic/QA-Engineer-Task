class EditIssuePage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }

    InitiatePageElements(){
        this.issueCardItem = this.page.getByText('What is Angular Jira clone application? Task-');
        this.editedIssueCard = this.page.getByText('QA task');
        this.issueTitle = this.page.locator('issue-title').getByRole('textbox');
        this.issueComment = this.page.locator('issue-comment').filter({ hasText: 'Trung Vo' }).nth(1);
        this.addCommentField = this.page.getByPlaceholder('Add a comment');
        this.saveCommentButton = this.page.getByRole('button', { name: 'Save' });
        this.closeButton = this.page.locator('j-button:nth-child(6) > .btn')    
    }

    async editIssue(addComment){
        await this.issueCardItem.click()
        await this.issueTitle.fill('QA task')
        await this.addCommentField.click()
        await this.addCommentField.fill(addComment)
        await this.saveCommentButton.click()
        await this.closeButton.click()
    }

    async checkEditedFields(){
        await this.editedIssueCard.click()
        return await this.issueComment.innerText()
    }
}

module.exports = { EditIssuePage }