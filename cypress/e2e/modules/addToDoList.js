require('cypress-xpath')

import { addTabPageObject } from "../../support/locators/addTabPageObject"
import { completeTabPageObject } from "../../support/locators/completeTabPageObject"
import { indexPageObject } from "../../support/locators/indexPageObject"
import { toDoTabPageObject } from "../../support/locators/toDoTabPageObject"

export function addToDoList(item){

    cy.xpath(addTabPageObject.input.inputTaskNew).type(item)
    cy.xpath(addTabPageObject.action.btnAddItem).click()

    cy.xpath(indexPageObject.action.toDoTaskTab).click()
    cy.wait(1000)
    //replace xpath //assertion: item doing add should visible in this tab
    const replaceXpathCheckTodo = toDoTabPageObject.action.checkComplete.replace('replaceItem',item)
    cy.xpath(replaceXpathCheckTodo).should('be.visible');
    cy.wait(1000)

    //assertion: item doing add should not visible in this tab
    cy.xpath(indexPageObject.action.completeTab).click()
    const replaceXpathCheckCompleted = completeTabPageObject.result.liCompleted.replace('replaceItem',item)
    cy.xpath(replaceXpathCheckCompleted).should('not.exist');
    cy.wait(1000)
    cy.xpath(indexPageObject.action.addItemTab).click()

}
