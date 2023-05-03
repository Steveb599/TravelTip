export const itemService = {
    getItems,
    addItem
}

const items = [3, 8, 9, _createItem()]

function getItems() {
    return items.slice()
}

function addItem(item) {
    if (item) items.push(item)
}

function _createItem() {
    return parseInt(Math.random()  * 1000)
}
