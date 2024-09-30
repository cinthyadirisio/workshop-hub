import React, { useEffect, useState } from "react"
import workshopQueries from "../../services/workshopQueries";
import WorkshopCard from "../../components/WorkshopCardSM";

function Workshops() {
  const [ workshops, setWorkshops ] = useState([])

  useEffect( () =>{
    workshopQueries.getAll().then( setWorkshops )
  }, [])

  return (
    <>
        <section className="d-flex flex-wrap justify-content-center gap-2 py-2">
          {
            workshops.length > 0 
            ? workshops.map( workshop => <WorkshopCard key={workshop._id} {...workshop} /> )
            : <p> No hay workshops para mostrar </p>
          }
        </section>
    </>
  );
}

export default Workshops;
