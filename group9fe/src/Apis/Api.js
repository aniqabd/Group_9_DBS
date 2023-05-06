import axios from "axios";

const login = (data) => axios.post(`http://localhost:5000/authenticate`, data);

// const login = (data) => axios.post(`http://localhost:3000/employee`, data);

// const getClaims = (data) => axios.get(`http://localhost:5000/getAllClaims`);

// const deleteClaim = (data)axios.delete(`https://example.com/api/items/${id}`)

const deleteClaim = (claimId) =>
  axios.delete(`http://localhost:5000/deleteclaim/${claimId}`);



const getClaims = (data) => axios.get(`http://localhost:3000/employee`);


export { login, getClaims, deleteClaim };
