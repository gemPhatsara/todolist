export const toDoTabPageObject = {
    input: {
    },
    action:{
        checkComplete: "//span[contains(@class, 'checkbox') and contains(text(),'replaceItem')]",
        btnDelete: "//li/label[span[text()='replaceItem']]//../button"

    },
    result:{
    }

}