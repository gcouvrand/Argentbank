import axios from "axios";

const GitHubClient = axios.create({
    baseURL: "http://localhost:3001/api/v1"
})

export async function Login (email, password) {
    return GitHubClient.post("/user/login", {
        email,
        password
    }).then(response => {
    return response.data.body.token;
})
}

export async function UserInfos (token) {
    return GitHubClient.post("/user/profile", {}, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(response => {

        return response.data.body;
    })
}

export async function UpdateUserInfos (firstName, lastName, token) {
    return GitHubClient.put("/user/profile", {
        firstName : firstName,
        lastName : lastName
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(response => {

        return response.data.body;   
    })
}

