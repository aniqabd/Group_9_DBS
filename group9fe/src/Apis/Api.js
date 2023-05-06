import axios from "axios"



const login = (data) => axios.post(`http://localhost:5000/authenticate`, data)
const getClaims = (data) => axios.get(`http://localhost:5000/getAllClaims`)


export {
    login,
    getClaims
}