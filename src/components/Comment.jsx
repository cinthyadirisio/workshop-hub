import React, { useEffect, useState } from "react";
import userQueries from "../services/userQueries";

function Comment({ _id, date, comment, userId, rating }) {
  
  const [user, setUser] = useState({});
  const [localDate, setLocalDate] = useState("")

  const generarEstrellas = (numero) => {
    let estrellas = "";
    for (let i = 0; i < numero; i++) {
      estrellas += "⭐";
    }
    return estrellas;
  };

  useEffect(() => {
    userQueries.getUserById(userId).then((response) => {
      const user = response.data;
      setUser(user);
    });
  const convertirUTCaLocal = (fechaUTC) => {
    const fecha = new Date(fechaUTC);
    return fecha.toLocaleString();
  };
  setLocalDate(convertirUTCaLocal(date));
  }, [userId, date]);

  return (
    <div className="card comment__card" key={_id}>
      <div className="card-header bg-tran d-flex align-items-baseline gap-2">
        <img className="comment_photo" src={user.photo} alt="user_photo" />
        <p>{user.firstName} {user.lastName}</p>
      </div>
      <div className="card-body bg-tran">
        <blockquote className="blockquote mb-0">
          <span>{localDate}</span>
          <p>{comment}</p>
          <footer className="blockquote-footer">{generarEstrellas(rating)}</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Comment;
