export const activeUser = (state = "", actions) => {
    switch(actions.type) {
        case "active":
            return state = actions.payload
        case "logOut":
            return state
            //localStorage.removeItem('tokenInfo')
        default:
            return state
    }
}