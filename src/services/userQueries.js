import axios from "axios"
const userQueries = {
    async register(data){
        console.log(data)
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', data)
            console.log(response)
            return response.data.response
        } catch (error) {
            console.log(error)
        }
    },
    async login(data){
        console.log(data)
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', data)
            return response.data.response
        } catch (error) {
            console.log(error)
        }
    }
}

export default userQueries