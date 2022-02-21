
/*export const delete_item = (index) => {
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
}*/

export const fetchItems = () => async (dispatch, getState) => {
    const items = await fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items")
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

export const postItems = (data) => async (dispatch, getState) => {
    const items = getState().items
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": data.newCatName,
        "description": data.newCatDescription,
        "image": data.newImgUrl
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    console.log(data)

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items", requestOptions)
        .then(response => response.text())
        .then(result => {
            //console.log(result)
            dispatch(fetchItems())
        })
        .catch(error => console.log('error', error));
    //dispatch(add_item({name: data.name, description: data.description, image: data.image}))
}

export const delete_item = (index) => (dispatch, getState) => {
    const items = getState().items
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "index": index
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items", requestOptions)
        .then(response => response.text())
        .then(result => {
            dispatch(fetchItems())
        })
        .catch(error => console.log('error', error));
}

export const editItem = (data, index) => (dispatch, getState) => {
    const items = getState().items
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "index": index,
        "name": data.newCatName,
        "description": data.newCatDescription,
        "image": data.newImgUrl
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items", requestOptions)
        .then(response => response.text())
        .then(result => {
            dispatch(fetchItems())})
        .catch(error => console.log('error', error));
}