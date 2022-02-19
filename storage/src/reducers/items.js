import kitty from "../images/kitty.jpg"

let initialItems = [
    {name: "Item 1", description: "Description 1", image: kitty},
    {name: "Item 2", description: "Description 2", image: kitty},
    {name: "Item 3", description: "Description 3", image: kitty},
    {name: "Item 4", description: "Description 4", image: kitty}
]


const items = (state = initialItems, actions) => {
    switch(actions.type) {
        case "delete_item":
            return state.filter(item => item !== state.splice(actions.payload, 1))
        case "add_item":
            return state.concat(actions.payload)
        default:
            return state
    }
}

export default items