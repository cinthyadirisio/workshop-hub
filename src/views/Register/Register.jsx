import React, { useState } from "react";
import Input from "../../components/Input";

function Register() {
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
    role: "instructor",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
        <form className="col-sm-12 col-md-8 col-lg-6 bg-dark p-3 text-light rounded">
          {formFields.map((field) => (
            <Input
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              options={field.options}
            />
          ))}

          <div className="d-flex p-2 justify-content-between">
            <input className="btn btn-outline-danger" type="reset" value="Borrar" />
            <input className="btn btn btn-outline-success" type="submit" value="Enviar" />
          </div>
        </form>
    </>
  );
}

export default Register;
