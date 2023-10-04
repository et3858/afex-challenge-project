const URL_SOURCE = import.meta.env.VITE_API_URL;


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
            // .then(response => response.json())
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response);
                }

                return response.json();
            })
            .then(response => {
                resolve(response);
            })
            .catch(response => {
                if (!response?.status) {
                    return reject({ error: { msg: "You are disconnected. Try it later." } });
                }

                response.json().then((data: {[key: string]: any}) => reject(data));
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
            .catch(response => {
                if (!response?.status) {
                    return reject({ error: { msg: "You are disconnected. Try it later." } });
                }

                reject(response);
            });
    });
}
