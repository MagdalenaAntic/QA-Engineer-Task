class EditProjectPage {
    constructor(page) {
        this.page = page;
        this.InitiatePageElements();
    }

    InitiatePageElements(){
        this.projectLink = this.page.getByRole('link', { name: 'Project Settings' })
        this.projectNameInput = this.page.getByPlaceholder('Project Name')
        this.projectURL = this.page.getByPlaceholder('Project URL')
        this.projectCategory = this.page.getByRole('combobox')
        this.projectDescription = this.page.getByPlaceholder('Project Description')
        this.saveButton = this.page.getByRole('button', { name: 'Save' }) 
        this.notificationModal = this.page.locator('nz-notification div').filter({ hasText: 'Changes have been saved' }).nth(3)
    }

    async editProjectSettings(projectName, projectURL, projectDesc) {
        await this.projectLink.click()
        await this.projectNameInput.fill(projectName)
        await this.projectURL.fill(projectURL)
        await this.projectCategory.selectOption( { index: 1 })
        await this.projectDescription.fill(projectDesc)
        await this.saveButton.click()    
    }

    async getMessage() {
       return await this.notificationModal.innerText()
    }
}

module.exports = { EditProjectPage }