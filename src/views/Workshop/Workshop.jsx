import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import workshopQueries from "../../services/workshopQueries";
import subjectQueries from "../../services/subjectQueries";
import SubjectsCard from "../../components/SubjectsCard";
import AddParticipant from "../../components/AddParticipant";
import { useSelector } from "react-redux";
import commentQueries from "../../services/commentQueries";
import Comment from "../../components/Comment";
import LinkNav from "../../components/LinkNav";

function Workshop() {
  const user = useSelector((store) => store.user.user);

  const param = useParams();
  const [workshop, setWorkshop] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [comments, setComments] = useState([]);
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    workshopQueries.getOneById(param.id).then((workshop) => {
      setWorkshop(workshop);
      subjectQueries.getSubjects().then((subjects) => {
        let workshopSubjects = subjects.filter(
          (subject) => subject.workshop === workshop._id
        );
        setSubjects(workshopSubjects);
      });
      commentQueries.getAllComments().then((comments) => {
        console.log(comments);
        let workshopComments = comments.filter(
          (comment) => comment.workshopId === workshop._id
        );
        setComments(workshopComments.flat());
      });
      const convertirUTCaLocal = (fechaUTC) => {
        const fecha = new Date(fechaUTC);
        return fecha.toLocaleString();
      };
      setStartDate(convertirUTCaLocal(workshop.startDate));
      setEndDate(convertirUTCaLocal(workshop.endDate));
    });
  }, []);
  console.log(comments);
  return (
    <>
      <article className="d-flex flex-column justify-content-center gap-1 p-3">
        <div className="p-2 rounded bg-tran text-light">
          <h3>{workshop.title}</h3>
          <p>Horario de cursada: {workshop.schedule}</p>
          {!workshop.isPast ? (
            <p>Fecha de comienzo: {startDate}</p>
          ) : (
            <p>Fecha de finalización: {endDate}</p>
          )}
          <p>{workshop.description}</p>
        </div>
        <div className="p-2 rounded  bg-tran text-light">
          <h4>Temario:</h4>
          {subjects.map((subject) => (
            <SubjectsCard key={subject._id} {...subject} />
          ))}
        </div>
        {comments.length > 0 ? (
          <div className="p-2 rounded  bg-tran text-light">
            {comments.map((comment) => {
              console.log(comment);
              return <Comment key={comment._id} {...comment} />;
            })}
          </div>
        ) : (
          <p>No hay comentarios sobre este workshop aun.</p>
        )}
      </article>
      <div className="p-2 rounded  bg-tran text-light mb-1">
        {(!workshop.isPast && user && <AddParticipant />) || (
          <LinkNav
            content={"Entra en tu cuenta y participa en el curso"}
            path={"/auth/login"}
          />
        )}
      </div>
    </>
  );
}

export default Workshop;
