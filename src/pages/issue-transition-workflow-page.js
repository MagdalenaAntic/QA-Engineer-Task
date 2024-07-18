class IssueTransitionWorkflowPage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }

    InitiatePageElements() {
        this.taskForMove = this.page.getByText(' Who is the author of Angular Jira clone?');
        this.destination = this.page.locator('#content div').filter({ hasText: 'Selected for Development 2'}).nth(2);
        this.selectedColumn = this.page.locator('#Selected issue-card').filter({ hasText: ' Who is the author of Angular Jira clone?'})    
    }

    async issueTransition() {
        await this.taskForMove.hover();
        await this.page.mouse.down();
        await this.destination.hover();
        await this.destination.hover();
        await this.page.mouse.up();               
    }

    async issueMovedToSelectedColumn(){    
        return await this.selectedColumn.innerText()
    }
}

module.exports = { IssueTransitionWorkflowPage }