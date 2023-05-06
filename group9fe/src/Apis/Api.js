import axios from "axios"



const login = (data) => axios.post(`http://localhost:5000/authenticate`, data)



export {
    login
}