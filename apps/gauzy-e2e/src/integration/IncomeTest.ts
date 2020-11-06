import * as loginPage from '../support/Base/pages/Login.po';
import { LoginPageData } from '../support/Base/pagedata/LoginPageData';
import * as incomePage from '../support/Base/pages/Income.po';
import * as faker from 'faker';
import { IncomePageData } from '../support/Base/pagedata/IncomePageData';
import * as dashboradPage from '../support/Base/pages/Dashboard.po';
import * as organizationTagsUserPage from '../support/Base/pages/OrganizationTags.po';
import { OrganizationTagsPageData } from '../support/Base/pagedata/OrganizationTagsPageData';

let name = ' ';

describe('Income test', () => {
	before(() => {
		name = faker.name.firstName();

		cy.visit('/');
		loginPage.verifyTitle();
		loginPage.verifyLoginText();
		loginPage.clearEmailField();
		loginPage.enterEmail(LoginPageData.email);
		loginPage.clearPasswordField();
		loginPage.enterPassword(LoginPageData.password);
		loginPage.clickLoginButton();
		dashboradPage.verifyCreateButton();
	});

	it('Should be able to add new income', () => {
		cy.visit('/#/pages/organization/tags');
		organizationTagsUserPage.gridButtonVisible();
		organizationTagsUserPage.clickGridButton(1);
		organizationTagsUserPage.addTagButtonVisible();
		organizationTagsUserPage.clickAddTagButton();
		organizationTagsUserPage.tagNameInputVisible();
		organizationTagsUserPage.enterTagNameData(
			OrganizationTagsPageData.tageName
		);
		organizationTagsUserPage.tagColorInputVisible();
		organizationTagsUserPage.enterTagColorData(
			OrganizationTagsPageData.tagColor
		);
		organizationTagsUserPage.tagDescriptionTextareaVisible();
		organizationTagsUserPage.enterTagDescriptionData(
			OrganizationTagsPageData.tagDescription
		);
		organizationTagsUserPage.saveTagButtonVisible();
		organizationTagsUserPage.clickSaveTagButton();
		cy.visit('/#/pages/accounting/income');
		incomePage.gridBtnExists();
		incomePage.gridBtnClick(1);
		incomePage.addIncomeButtonVisible();
		incomePage.clickAddIncomeButton();
		incomePage.selectEmployeeDropdownVisible();
		incomePage.clickEmployeeDropdown();
		incomePage.selectEmployeeFromDrodpwon(0);
		incomePage.dateInputVisible();
		incomePage.enterDateInputData();
		incomePage.clickKeyboardButtonByKeyCode(9);
		incomePage.contactInputVisible();
		incomePage.enterContactInputData(name);
		incomePage.amountInputVisible();
		incomePage.enterAmountInputData(IncomePageData.defaultAmount);
		incomePage.tagsDropdownVisible();
		incomePage.clickTagsDropdwon();
		incomePage.selectTagFromDropdown(0);
		incomePage.clickCardBody();
		incomePage.notesTextareaVisible();
		incomePage.enterNotesInputData(IncomePageData.defaultNote);
		incomePage.saveIncomeButtonVisible();
		incomePage.clickSaveIncomeButton();
	});
	it('Should be able to edit income', () => {
		incomePage.tableRowVisible();
		incomePage.selectTableRow(0);
		incomePage.selectTableRow(0);
		incomePage.selectTableRow(0);
		incomePage.editIncomeButtonVisible();
		incomePage.clickEditIncomeButton();
		incomePage.dateInputVisible();
		incomePage.enterDateInputData();
		incomePage.clickKeyboardButtonByKeyCode(9);
		incomePage.contactInputVisible();
		incomePage.enterContactInputData(name);
		incomePage.amountInputVisible();
		incomePage.enterAmountInputData(IncomePageData.defaultAmount);
		incomePage.notesTextareaVisible();
		incomePage.enterNotesInputData(IncomePageData.defaultNote);
		incomePage.saveIncomeButtonVisible();
		incomePage.clickSaveIncomeButton();
	});
	it('Should be able to delete income', () => {
		incomePage.tableRowVisible();
		incomePage.selectTableRow(0);
		incomePage.selectTableRow(0);
		incomePage.selectTableRow(0);
		incomePage.deleteIncomeButtonVisible();
		incomePage.clickDeleteIncomeButton();
		incomePage.confirmDeleteButtonVisible();
		incomePage.clickConfirmDeleteButton();
	});
});
