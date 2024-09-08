require('cypress-xpath')

import { completeTabPageObject } from "../../support/locators/completeTabPageObject"
import { indexPageObject } from "../../support/locators/indexPageObject"
import { toDoTabPageObject } from "../../support/locators/toDoTabPageObject" 

export function deleteCompleteList(item){

    cy.xpath(indexPageObject.action.completeTab).click()
    //replace xpath
    const replaceXpath = completeTabPageObject.action.btnDelete.replace('replaceItem',item)
    cy.xpath(replaceXpath).should('be.visible');
    cy.wait(1000)
    cy.xpath(replaceXpath).click().then(()=>{
        //assertion: item doing delete should not visible in this tab
        cy.xpath(replaceXpath).should('not.exist');
    })

    //assertion: item doing delete should not visible in this tab
    cy.xpath(indexPageObject.action.toDoTaskTab).click()
    let replaceXpathCheck = toDoTabPageObject.action.checkComplete.replace('replaceItem',item)
    cy.xpath(replaceXpathCheck).should('not.exist')
}
