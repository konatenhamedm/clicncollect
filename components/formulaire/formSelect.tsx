import React from "react";
interface InputProps {
  formik: any;
  type: string;
  name: string;
  placeholder: string;
  existe: boolean;
  longeur: number;
  message?: string;
}

const FormSelect = ({
  formik,
  type,
  name,
  placeholder,
  existe,
  longeur,
  message,
}: InputProps) => {
  return (
    <>
      <select
        className="bg-white flex w-full text-black text-sm border-2 border-black   placeholder-custom-placeholder placeholder-black  rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
        name="quartier"
        onChange={formik.handleChange}
        value={formik.values.option}
        onBlur={formik.handleBlur}
      >
        <option key="1" value="option1">
          Retrait dans notre point relais à Cocody Angré
        </option>
        <option key="2" value="option1">
          Livraison à votre domicile
        </option>
      </select>
    </>
  );
};

export default FormSelect;
