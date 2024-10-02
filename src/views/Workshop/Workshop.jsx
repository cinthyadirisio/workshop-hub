import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import workshopQueries from "../../services/workshopQueries";
import subjectQueries from "../../services/subjectQueries";
import SubjectsCard from "../../components/SubjectsCard";
import AddParticipant from "../../components/AddParticipant";
import { useSelector } from "react-redux";

function Workshop() {
  const user = useSelector((store) => store.user.user)

  const param = useParams();
  const [workshop, setWorkshop] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [comments, setComments] = useState([])

  useEffect(() => {
    workshopQueries.getOneById(param.id).then((workshop)=>{
      setWorkshop(workshop)
      subjectQueries.getSubjects().then((subjects) => {
        let workshopSubjects = subjects.filter(
          (subject) => subject.workshop === workshop._id
        );
        setSubjects(workshopSubjects);
      });
  });
  }, []);
  console.log(workshop);
  console.log(subjects);

  return (
    <>
      <article className="d-flex flex-column justify-content-center gap-1 p-3">
        <div className="p-2 rounded bg-tran text-light">
          <h3>{workshop.title}</h3>
          <p>Horario de cursada: {workshop.schedule}</p>
          {!workshop.isPast ? (
            <p>Fecha de comienzo: {workshop.startDate}</p>
          ) : (
            <p>Fecha de finalización: {workshop.endDate}</p>
          )}
          <p>{workshop.description}</p>
        </div>
        <div className="p-2 rounded  bg-tran text-light">
          <h4>Temario:</h4>
          {subjects.map((subject) => (
            <SubjectsCard key={subject._id} {...subject} />
          ))}
        </div>
        {
          comments.length > 0
          ? <div>

          </div>
          : <p>No hay comentarios sobre este workshop aun.</p>
        }
      </article>
      {
        user && <AddParticipant userId={user._id} workshopId={param.id} />
      }
      
    </>
  );
}

export default Workshop;
