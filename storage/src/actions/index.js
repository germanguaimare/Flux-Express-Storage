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

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/items", requestOptions)
        .then(response => response.text())
        .then(result => {
            //console.log(result)
            dispatch(fetchItems())
        })
        .catch(error => console.log('error', error));
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
            dispatch(fetchItems())
        })
        .catch(error => console.log('error', error));
}

export const logIn = (data, navigate, dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": data.username,
        "password": data.password,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.accessToken) {
                navigate('home');
                localStorage.setItem('tokenInfo', JSON.stringify(result));
            }
        })
        .catch(error => {
            alert("Wrong username or password");
        });

}

export const setActiveUser = (data) => {
    return {
        type: "active",
        payload: data.username
    }
}
export const logOut = (navigate) => {
    localStorage.removeItem("tokenInfo")
    navigate("/")
}

export const createUser = (data, setShow) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "newUsername": data.newUsername,
        "newPassword": data.newPassword,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://4000-germanguaimare-fluxexpre-j835dwh3g6z.ws-us33.gitpod.io/users", requestOptions)
        .then(response => response.text())
        .then(result => {
            if (result === "New user created") {
                alert(result)
                setShow(false)
            }
        })
        .catch(error => console.log('error', error));
}

