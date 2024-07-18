const { expect } = require('@playwright/test');
const { CreateIssuePage } = require('./pages/create-issue-page');
const { SearchIssuePage } = require('./pages/search-issue-page');
const { EditIssuePage } = require('./pages/edit-issue-page');
const { IssueTransitionWorkflowPage } = require('./pages/issue-transition-workflow-page');
const { DeleteIssuePage } = require('./pages/delete-issue-page');
const { EditProjectPage } = require('./pages/edit-project-page');
const testData = require('../test-data/test-data.json');

class Board {
    constructor(page) {
        this.page = page;
        this.createIssuePage = new CreateIssuePage(page);
        this.searchIssuePage = new SearchIssuePage(page);
        this.editIssuePage = new EditIssuePage(page);
        this.issueTransitionWorkflowPage = new IssueTransitionWorkflowPage(page);
        this.deleteIssuePage = new DeleteIssuePage(page);
        this.editProjectPage = new EditProjectPage(page);
    }

    async navigateToApp() {
        await this.page.goto('/');
    }

    async createNewIssue() {
        const { issueSummary } = testData;
        await this.createIssuePage.addNewIssueAndCreate(issueSummary);

        let issueCardText = await this.createIssuePage.getIssueCardText();
        await expect(issueCardText).toContain(issueSummary);
    }

    async searchIssue() {
        const { searchKeyword } = testData;
        await this.searchIssuePage.searchIssue(searchKeyword);

        let result = await this.searchIssuePage.issueResults()
        await expect(result).toContain(searchKeyword)
    }

    async editIssue() {
        const { addComment } = testData
        await this.editIssuePage.editIssue(addComment);
        
        let changed = await this.editIssuePage.checkEditedFields()
        await expect(changed).toContain(addComment)    
    }

    async issueTransitionWorkflow() { 
        const { draggedIssue } = testData
        await this.issueTransitionWorkflowPage.issueTransition();

        let droppedColumn = await this.issueTransitionWorkflowPage.issueMovedToSelectedColumn();
        await expect(droppedColumn).toMatch(draggedIssue); 
    }

    async deleteIssue() {
        const { specificIssue } = testData;
        await this.deleteIssuePage.moveIssueToTrash()

        let deleted = await this.deleteIssuePage.checkDeletedIssue()
        await expect(deleted).not.toContainText(specificIssue)
    }

    async editProject(){
        const { projectName, projectURL, projectDescription, projectNotification } = testData
        await this.editProjectPage.editProjectSettings(projectName, projectURL, projectDescription )

        let message = await this.editProjectPage.getMessage()
        await expect(message).toContain(projectNotification)
    }
}

module.exports = Board;
