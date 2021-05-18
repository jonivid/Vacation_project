import axios from "axios";

const API_URL = "http://localhost:3001/users/";

export const register = (firstName,lastName,username, password) => {
    return axios.post(API_URL, {
        firstName,lastName,username, password
    });
};

export const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// export default {
//     register,
//     login,
//     logout,
//     getCurrentUser,
// };