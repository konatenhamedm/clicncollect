import React, { useState } from 'react';

const FormTel = () => {
  const [values, setValues] = useState({ contact1: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    // Optionally, you can call the validation function here
    // if you want to validate on every change
    if (name === 'contact1') {
      validateContact1(value);
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched({ ...touched, [name]: true });

    // Call the validation function when the input loses focus
    if (name === 'contact1') {
      validateContact1(value);
    }
  };

  const validateContact1 = (value) => {
    const isValid = (value, country = { dialCode: '+225' }) => {
      const numberLength = value.replace(country.dialCode, '').length;
      return numberLength >= 10;
    };

    if (!isValid(value)) {
      setErrors({ ...errors, contact1: 'Le numéro de téléphone doit contenir au moins 10 chiffres après le code du pays.' });
    } else {
      const newErrors = { ...errors };
      delete newErrors.contact1;
      setErrors(newErrors);
    }
  };

  return (
    <input
      type="text"
      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
      name="contact1"
      placeholder=""
      value={values.contact1}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.contact1 && Boolean(errors.contact1)}
      helperText={touched.contact1 && errors.contact1}
    />
  );
};

export default FormTel;
