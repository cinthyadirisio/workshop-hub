import axios from "axios";

const subjectQueries = {
    async getSubjects(){
        try {
            const response = await axios(`http://localhost:8080/api/subjects`)
            return response.data.response
        } catch (error) {
            console.log(error)
            return []
        }
    }
}


export default subjectQueries