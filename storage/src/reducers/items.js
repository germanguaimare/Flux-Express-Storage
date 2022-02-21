
let initialItems = []

export const items = (state = initialItems, actions) => {
    switch(actions.type) {
        /*case "delete_item":
            return state.filter((initialItems, index) => index !== actions.payload)*/
        case "add_item":
            return state.concat(actions.payload)
        case "set_items":
            return state = actions.payload
        default:
            return state
    }
}
