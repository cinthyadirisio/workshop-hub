import { useEffect } from "react"
import workshopQueries from "../services/workshopQueries"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function AddParticipant() {
    const param = useParams()
    const user = useSelector(store => store.user.user)
    const workshopId = param.id

    useEffect(()=>{
        workshopQueries.addParticipant(user._id, workshopId)
    })


  return (
    <button className="btn btn-outline-info bg-tran">Inscribete al workshop!</button>

  )
}

export default AddParticipant