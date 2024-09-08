require('cypress-xpath')

import { completeTabPageObject } from "../../support/locators/completeTabPageObject"
import { indexPageObject } from "../../support/locators/indexPageObject"
import { toDoTabPageObject } from "../../support/locators/toDoTabPageObject"

export function checkComplete(item){

    cy.xpath(indexPageObject.action.toDoTaskTab).click()
    
    //replace xpath
    let replaceXpathCheck = toDoTabPageObject.action.checkComplete.replace('replaceItem',item)
    cy.xpath(replaceXpathCheck).should('be.visible')
    cy.wait(1000)
    cy.xpath(replaceXpathCheck).click().then(() => {
        cy.wait(1000)
        //assertion: item doing checked should not visible in this tab
        cy.xpath(replaceXpathCheck).should('not.exist');
    })
    //assertion: item doing checked should visible in this tab
    cy.xpath(indexPageObject.action.completeTab).click()
    const replaceXpathComplete = completeTabPageObject.result.liCompleted.replace('replaceItem',item)
    cy.xpath(replaceXpathComplete).should('be.visible');

}
