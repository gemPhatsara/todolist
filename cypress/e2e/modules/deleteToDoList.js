require('cypress-xpath')

import { indexPageObject } from "../../support/locators/indexPageObject"
import { toDoTabPageObject } from "../../support/locators/toDoTabPageObject"

export function deleteToDoList(item){

    cy.xpath(indexPageObject.action.toDoTaskTab).click()
    //replace xpath
    const replaceXpath = toDoTabPageObject.action.btnDelete.replace('replaceItem',item)
    cy.xpath(replaceXpath).should('be.visible');
    cy.xpath(replaceXpath).click().then(() => {
        //assertion: item doing delete should not visible in this tab
        cy.xpath(replaceXpath).should('not.exist');
    })

    //assertion: item doing delete should not visible in this tab
    cy.xpath(indexPageObject.action.toDoTaskTab).click()
    let replaceXpathCheck = toDoTabPageObject.action.checkComplete.replace('replaceItem',item)
    cy.xpath(replaceXpathCheck).should('not.exist')
}
