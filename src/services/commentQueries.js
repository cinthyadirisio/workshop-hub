import axios from "axios";
const commentQueries = {
    async getAllComments(){
        try {
            const comments = await axios('http://localhost:8080/api/comments')
            return comments
        } catch (error) {
            console.log(error)
            return []
        }
    }
}