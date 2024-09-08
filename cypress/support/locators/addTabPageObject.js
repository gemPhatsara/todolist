export const addTabPageObject = {
    input: {
        inputTaskNew: "//input[contains(@id, 'new-task')]",
        //inputTaskNew: '#new-task'
    },
    action:{
        btnAddItem: "//div[contains(@id, 'add-item')]/button"

    },
    result:{
        listHeader: "//h1[contains(text(), 'To Do List')]"
    }

}