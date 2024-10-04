import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import workshopQueries from "../../services/workshopQueries";
import LinkNav from "../../components/LinkNav";
import userQueries from "../../services/userQueries";
import Input from "../../components/Input";
import { enqueueSnackbar } from "notistack";
import userActions from "../../redux/actions/userActions";

function UserProfile() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.user);

  const [userWorkshops, setUserWorkshops] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});

  const role = (role) => {
    if (role === "admin") return "Administrador";
    if (role === "instructor") return "Instructor";
    if (role === "user") return "Usuario";
  };

  useEffect(() => {
    setUserData(user);
    workshopQueries.getAll().then((workshops) => {
      const workshopsUser = workshops?.filter((workshop) => workshop.participants.includes(user._id));
      if (workshopsUser.length > 0) setUserWorkshops(workshopsUser);
    });
  }, [user, isEditing]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e)
    setUserData((prevData) => ({...prevData, [id]: value, }));
    console.log(userData)
  };

  const getModifiedFields = (originalData, newData) => {
    const modifiedFields = {}
    for (const key in newData) {
      if (newData[key] !== originalData[key]) modifiedFields[key] = newData[key]
    }
    console.log(modifiedFields)
    return modifiedFields
  }

  const handleSave = () => {
    const modifiedData = getModifiedFields(user, userData)
    console.log(modifiedData)
    userQueries.updateUser(userData._id, modifiedData).then((updatedUser) => {
      setUserData(updatedUser);
      dispatch(userActions.update({user:updatedUser}))
      setIsEditing(false);
      enqueueSnackbar('Información editada exitosamente', { variant: 'success' });
    }).catch(error => enqueueSnackbar(`Error: ${error.message}`, { variant: 'error' }));
  };

  return (
    <div className="d-flex flex-column gap-1 w-100">
      {isEditing ? (
        <>
          <div className="container-fluid d-flex flex-column bg-tran rounded w-100 text-light p-2 justify-content-around">
            <Input id="firstName" label="Nombre" type="text" onChange={handleInputChange} placeholder="Nombre" className="form-control-sm col-7 rounded bg-tran text-light" />
            <Input id="lastName" label="Apellido" type="text" onChange={handleInputChange} placeholder="Apellido" className="form-control-sm col-7 rounded bg-tran text-light" />
            <Input
              id="email" label="Email" type="email" onChange={handleInputChange} placeholder="Email" className="form-control-sm col-7 rounded bg-tran text-light" />
            <Input id='photo' label='Foto de perfil' type="url" placeholder={user.photo} className="form-control-sm col-7 rounded bg-tran text-light" />
            <div className="d-flex justify-content-center gap-1">
              <button className="btn btn-outline-danger"  onClick={() => setIsEditing(false)}>
                Cancelar
              </button>
              <button className="btn btn-outline-success" onClick={handleSave}>
                Guardar
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <article className="container-fluid bg-tran rounded text-light p-2 flex-wrap">
            <div className="d-flex p-2 justify-content-around flex-wrap">
              <figure className="user_profile_figure">
                <img src={user.photo} alt="user_photo" />
              </figure>
              <div className="d-flex flex-column">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>{user.email}</p>
                <h4>{role(user.role)}</h4>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-1">
              <button
                className="btn btn-outline-light"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            </div>
          </article>
        </>
      )}

      <div className="container-fluid bg-tran rounded w-100 text-light p-3">
        <h5 className="text-decoration-underline">Mis Workshops</h5>
        {userWorkshops.length > 0 ? (
          <div>
            {userWorkshops.map((workshop) => (
              <LinkNav key={workshop._id} content={workshop.title} path={`/workshop/${workshop._id}`} />
            ))}
          </div>
        ) : (
          <p>No estás inscripto en ningún workshop aún</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;