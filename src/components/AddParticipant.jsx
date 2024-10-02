import { useEffect } from "react"
import workshopQueries from "../services/workshopQueries"

function AddParticipant(userId, workshopId) {


    useEffect(()=>{
        workshopQueries.addParticipant(userId, workshopId)
    })


  return (
    <button className="btn btn-outline-info bg-tran">Inscribete al workshop!</button>

  )
}

export default AddParticipant