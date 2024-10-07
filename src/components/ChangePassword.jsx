import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ChangePassword() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [isEditing, setIsEditing] = useState(false);
  

  const handleChangePassword = () =>{

  }
  return (
  <>
    {
        !isEditing ? (
            <button onClick={handleChangePassword} className="btn btn-outline-light">Cambiar contraseña</button>
        ) : ( 
        <button onClick={() =>setIsEditing(false)}>Cancelar</button> )
    }
  
  
  
  
  </>)
}

export default ChangePassword;
