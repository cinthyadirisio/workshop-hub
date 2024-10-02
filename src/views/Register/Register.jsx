import React, { useState } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import userQueries from "../../services/userQueries";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const formFields = [
    {
      id: "firstName",
      label: "Nombre",
      type: "text",
      placeholder: "Ingresa tu nombre",
    },
    {
      id: "lastName",
      label: "Apellido",
      type: "text",
      placeholder: "Ingresa tu apellido",
    },
    {
      id: "email",
      label: "Correo Electrónico",
      type: "email",
      placeholder: "Ingresa tu correo electrónico",
    },
    {
      id: "photo",
      label: "Foto",
      type: "url",
      placeholder: "Ingresa la URL de tu foto",
    },
    {
      id: "password",
      label: "Contraseña",
      type: "password",
      placeholder: "Ingresa tu contraseña",
    },
    {
      id: "confirmPassword",
      label: "Confirmar Contraseña",
      type: "password",
      placeholder: "Confirma tu contraseña",
    },
    {
      id: "role",
      label: "Rol",
      type: "select",
      options: [
        { value: "instructor", label: "Instructor" },
        { value: "usuario", label: "Usuario" },
      ],
    },
  ];

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      photo: e.target[3].value,
      password: e.target[4].value,
      confirmPassword: e.target[5].value,
      role: e.target[6].value,
    }
    userQueries.register(data).then( response =>{
      if (response){
        navigate('/login')
      } else{
        alert(response)
      }
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="col-sm-12 col-md-8 col-lg-6 bg-dark p-3 text-light rounded"
      >
        {formFields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={field.value}
            placeholder={field.placeholder}
            options={field.options}
          />
        ))}

        <div className="d-flex p-2 justify-content-between">
          <input
            className="btn btn-outline-danger"
            type="reset"
            value="Borrar"
          />
          <input
            className="btn btn-outline-success"
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </>
  );
}

export default Register;
