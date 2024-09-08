export const indexPageObject = {
    input: {
    },
    action:{
        addItemTab: "//a[contains(text(),'Add Item')]",
        toDoTaskTab: "//a[contains(text(),'To-Do Tasks')]",
        completeTab: "//a[contains(text(),'Completed')]",
    },
    result:{
        listHeader: "//h1[contains(text(), 'To Do List')]"
    }

}