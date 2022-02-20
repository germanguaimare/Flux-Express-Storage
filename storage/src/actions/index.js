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

export const fetchItems = () => async (dispatch, getState) => {
    const items = await fetch ("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items")
    .then(response => response.json())
    //.then(result => console.log(result))
    dispatch(set_items(items))
}

export const set_items = (items) => {
    return {
        type: "set_items",
        payload: items
    }
}