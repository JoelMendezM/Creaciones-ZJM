import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  FormContainer,
  Form,
  Label,
  ButtonContainer,
  InputGroup,
  Input,
  ErrorMessage,
  Button,
  SuccessMessageSent,
} from '../../elements/Forms.js';

function ContactForm({ cancelForm, confirmOrder }) {
  const [successMessage, setSuccessMessage] = useState(false);

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^\d{8,10}$/, // 7 a 14 numeros.
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          number: '',
        }}
        validate={(validationValue) => {
          let errorsValidation = {};

          //Name validation
          if (!validationValue.name) {
            errorsValidation.name =
              'Nombre y apellido no puede estar en blanco, por favor ingrese un nombre';
          } else if (!expressions.name.test(validationValue.name)) {
            errorsValidation.name = 'El nombre y apellido solo puede contener letras y espacios';
          }

          //Email validation
          if (!validationValue.email) {
            errorsValidation.email =
              'Correo electrónico no puede estar en blanco, por favor ingrese un correo';
          } else if (!expressions.email.test(validationValue.email)) {
            errorsValidation.email =
              'Correo electrónico inválido, solo puede contener letras, números, puntos, guiones y guiones bajos. Por favor escriba uno correctamente';
          }

          //Number validation
          if (!validationValue.number) {
            errorsValidation.number =
              'Número de contacto no puede estar en blanco, por favor ingrese un número';
          } else if (!expressions.number.test(validationValue.number)) {
            errorsValidation.number =
              'Número inválido, solo puede contener números. Por favor escriba el número correctamente';
          }

          return errorsValidation;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
          console.log('formulario enviado');
          localStorage.setItem('buyerName', values.name);
          localStorage.setItem('buyerPhoneNumber', values.number);
          localStorage.setItem('buyerEmail', values.email);
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 3500);
          setTimeout(() => confirmOrder(), 5000);
        }}>
        {({ handleSubmit, values, touched, handleChange, handleBlur, errors }) => (
          <FormContainer>
            <h1>Formulario de contacto</h1>
            <Form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Nombre y apellido</Label>
                <InputGroup>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ej: Joel Méndez"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {touched.name && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </div>
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <InputGroup>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ej: joel.j.mendez.m@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </div>
              <div>
                <Label htmlFor="number">Número de contacto</Label>
                <InputGroup>
                  <Input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="ej: 1162333795"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {touched.number && errors.number && <ErrorMessage>{errors.number}</ErrorMessage>}
              </div>
              <ButtonContainer>
                <Button type="submit" className="btn btn-success">
                  Confirmar compra
                </Button>
                <Button type="submit" className="btn btn-danger" onClick={cancelForm}>
                  Cancelar
                </Button>
              </ButtonContainer>
              {successMessage && (
                <SuccessMessageSent>Formulario de contacto enviado con éxito</SuccessMessageSent>
              )}
            </Form>
          </FormContainer>
        )}
      </Formik>
    </>
  );
}

export { ContactForm };
