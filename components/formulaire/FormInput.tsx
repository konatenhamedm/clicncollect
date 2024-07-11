import React from "react";

interface InputProps {
  values: any;
  type: string;
  name: string;
  placeholder: string;
  existe: boolean;
  longeur: number;
  message?: string;
  handleChange?: any;
}
const FormInput = ({
  values,
  type,
  name,
  placeholder,
  existe,
  longeur,
  message,
  handleChange,
}: InputProps) => {
  return (
    <>
      {/*  <label
        htmlFor={name}
        className={`block font-latoBold text-sm pb-2 ${
          formik.touched + "." + [name] && formik.errors + "." + [name]
            ? "text-red-400"
            : ""
        }`}
      >
        {formik.touched + "." + [name] && formik.errors + "." + [name]
          ? message
          : "name"}
      </label>
      <p></p> */}

      <input
        className="bg-white flex w-full text-black text-sm border-2 border-gray   placeholder-custom-placeholder placeholder-normal  rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out duration-150"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={values + "." + name}
        // onBlur={formik.handleBlur}
        onKeyPress={(event) => {
          if (existe) {
            if (longeur == 1) {
              if (!/[1-5]/.test(event.key)) {
                event.preventDefault();
              }
            } else {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }
          }
        }}
        maxLength={longeur}
      />
    </>
  );
};

export default FormInput;
