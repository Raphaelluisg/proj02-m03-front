const Api = {
    apiUrl: "https://raphaellg.herokuapp.com/todolists",

    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fetchPost: (todolist) => {
        return fetch(Api.apiUrl, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(todolist)
        })
    },
    fetchPut: (todolist, id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(todolist)
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: "DELETE",
        })
    }
}

export default Api;