const API_BASE_URL = `http://localhost:3000`;

const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json"
};

const login = (username, password) => {
    console.log('hello')
    return fetch(`${API_BASE_URL}/auth/create`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json());
};


const signup = (username, password) => {
    return fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json());
};

const getCurrentUser = token => {
    return fetch(`${API_BASE_URL}/auth/show`, {
        headers: { ...headers, Authorization: token }
    }).then(resp => resp.json());
};


export default {
    login,
    getCurrentUser,
    signup

};