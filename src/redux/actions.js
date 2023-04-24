import axios from "axios"
import { toast } from "react-toastify"
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const login = (data) => {
    return async dispatch => {
        await axios.post('http://localhost:5000/user/login', data)
            .then(response => {
                if (response.data.message === "Login Successful") {
                    localStorage.setItem('loginDetails', JSON.stringify(data.username));
                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        pauseOnHover: false,
                        closeOnClick: true,                      
                        draggable: true,
                        theme: "colored",
                    })
                    return dispatch({
                        type: LOGIN,
                        payload: data.username
                    })
                }
                else if (response.data.message === "User Not Found") {
                    toast.warn(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        closeOnClick: true,
                        pauseOnHover: false,                        
                        draggable: true,
                        theme: "colored",
                    })
                }
                else {
                    toast.error(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        closeOnClick: true,
                        pauseOnHover: false,                        
                        draggable: true,
                        theme: "colored",
                    })
                }
            })
            .catch(error => console.log(error))
    }
}
export const logout = () => {
    return async dispatch => {
        toast.success("Logout Successful",{
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        })
        return dispatch({
            type: LOGOUT
        })
    }
}