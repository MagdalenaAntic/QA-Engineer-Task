const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const Board = require('../src/board');

const testData = require('../test-data/test-data.json');

test.describe('Board Tests', () => {
    let browser;
    let page;
    let board;

    test.beforeEach(async () => {
        browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
        board = new Board(page);
        await board.navigateToApp();
    });

    test.afterEach(async () => {
        await browser.close();
    });

    test('Create new issue', async () => {
        await board.createNewIssue();
    });

    test('Search issue', async () => {
        await board.searchIssue();
    });

    test('Edit issue', async () => {
        await board.editIssue();

    });

    test('Issue transition', async () => {
        await board.issueTransitionWorkflow();

    });

    test('Delete issue', async () => {
        await board.deleteIssue();
    });

    test('Edit project', async () => {
        await board.editProject();
    });

});





