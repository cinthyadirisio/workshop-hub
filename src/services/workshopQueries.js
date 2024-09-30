import axios from "axios"

const workshopQueries = {
    async getAll(){
        try {
            const response = await axios('http://localhost:8080/api/workshops')
            return response.data.response
        } catch (error) {
            console.log(error)
            return []
        }
    },
    async getOneById(id){
        try {
            const response = await axios(`http://localhost:8080/api/workshops/${id}`)
            return response.data.response
        } catch (error) {
            console.log(error)
            return {}
        }
    }
}

export default workshopQueries