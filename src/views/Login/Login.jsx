import React, { useState } from 'react'
import Input from '../../components/Input';

function Login() {
  const formFields = [
    {
      id: "email",
      label: "Correo Electrónico",
      type: "email",
      placeholder: "Ingresa tu correo electrónico",
    },{
      id: "password",
      label: "Contraseña",
      type: "password",
      placeholder: "Ingresa tu contraseña",
    }
  ]



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
  )
}

export default Login