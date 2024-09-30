import { Link } from 'react-router-dom'

function WorkshopCard({ _id, title, description, representativePhoto, isPast }) {
  return (
    <div key={_id} className='bg-tran workshop_card p-2 text-light rounded' >
        <img src={representativePhoto} className="card-img-top" alt="representative photo of workshop" />
        <span className="badge">
            {
                isPast ? 'Terminado' : 'Futuro'
            }
        </span>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to={`/workshops/${_id}`} className='align-self-end'>Detalles</Link>
    </div>
  )
}

export default WorkshopCard