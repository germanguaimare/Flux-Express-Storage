export const delete_item = (index) => {
    return {
        type: "delete_item",
        payload: index
    }
}

export const add_item = (newCat) => {
    return {
        type: "add_item",
        payload: newCat
    }
}