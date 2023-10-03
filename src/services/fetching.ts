const URL_SOURCE = "http://localhost:3000";


export function getRequest() {
    return new Promise((resolve, reject) => {
        fetch(URL_SOURCE)
            .then(response => response.json())
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}


export function postRequest(data: object = {}) {
    return new Promise((resolve, reject) => {
        fetch(URL_SOURCE, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    })
}


export function deleteRequest(path: string = "") {
    return new Promise((resolve, reject) => {
        fetch(URL_SOURCE + path, {
            method: "DELETE",
        })
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    });
}
