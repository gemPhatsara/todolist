import { addToDoList } from '../modules/addToDoList.js'
import { navigatePage } from '../modules/navigatePage.js'
import { checkComplete } from '../modules/checkComplete.js'
import { deleteCompleteList } from '../modules/deleteCompleteList.js'
import { deleteToDoList } from '../modules/deleteToDoList.js'

describe('QA Chalenge', () => {
    it('navigate to page and add new task', () => {
        navigatePage()
        cy.fixture('listToDo').then((list) => {
            for(let item of list){
                addToDoList(item)
            }
            checkComplete(list[0])
            deleteCompleteList(list[0])
        })
    })

    it('add new and delete from to do list', () => {
        navigatePage()
        cy.fixture('listToDo').then((list) => {
            for(let item of list){
                addToDoList(item)
            }
            deleteToDoList(list[0])
        })
    })
})
