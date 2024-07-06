import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useFormikContext, Formik } from 'formik';

const Step3 = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <div className="bg-white max-full shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center">
       <div className="px-4 py-5 sm:px-6 items-center justify-center">
              <h3 className="text-xl leading-6 font-bold text-black items-center justify-center text-center">
                Récapitulatif de votre commande
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
                Renseignez les informations pour vous faire livrer par
                ClicnCollect à Abidjan
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
                  <dt className="text-xl font-bold text-black sm:col-span-2">
                  <TextField
                    name="nom"
                    label="First Name"
                    value={values.nom}
                    onChange={handleChange}
                    error={touched.nom && Boolean(errors.nom)}
                    helperText={touched.nom && errors.nom}
                    fullWidth
                  />
                    {/* <label
                      htmlFor="nom"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.nom && formik.errors.nom
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.nom && formik.errors.nom
                        ? formik.errors.nom
                        : "Nom *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="nom"
                      placeholder="Entrez votre nom"
                      existe={false}
                      longeur={255}
                      message={formik.errors.nom}
                    />
                    <label
                      htmlFor="prenom"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.prenom && formik.errors.prenom
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.prenom && formik.errors.prenom
                        ? formik.errors.prenom
                        : "Prénoms *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="prenom"
                      placeholder="Entrez votre prénoms"
                      existe={false}
                      longeur={255}
                      message={formik.errors.prenom}
                    />
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.numero && formik.errors.numero
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.numero && formik.errors.numero
                        ? formik.errors.numero
                        : "Numéro de commande*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="numero"
                      placeholder="Entrez le numéro  de commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.numero}
                    />
                    <label
                      htmlFor="poids"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.poids && formik.errors.poids
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.poids && formik.errors.poids
                        ? formik.errors.poids
                        : "Poids total de commande"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="poids"
                      placeholder="Entrez le poids de votre commande "
                      existe={false}
                      longeur={255}
                      message={formik.errors.poids}
                    />
                    <label
                      htmlFor="montant"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.montant && formik.errors.montant
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.montant && formik.errors.montant
                        ? formik.errors.montant
                        : "Montant total de commande *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="montant"
                      placeholder="Entrez le montant total de la commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.montant}
                    />
                    <label
                      htmlFor="description"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.description && formik.errors.description
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : "Description de la commande"}
                    </label>
                    <p></p>
                    <FormArea
                      formik={formik}
                      type="text"
                      name="description"
                      placeholder="Entrez la description de la commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.description}
                    />
                    <label
                      htmlFor="contact1"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.contact1 && formik.errors.contact1
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.contact1 && formik.errors.contact1
                        ? formik.errors.contact1
                        : "Contact 1*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact1"
                      placeholder="Entrez le contact 1"
                      existe={false}
                      longeur={255}
                      message={formik.errors.contact1}
                    />
                    <label
                      htmlFor="contact2"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.contact2 && formik.errors.contact2
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.contact1 && formik.errors.contact1
                        ? formik.errors.contact1
                        : "Contact 2*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact2"
                      placeholder="Entrez le contact 2"
                      existe={false}
                      longeur={255}
                      message={formik.errors.contact2}
                    /> */}
                  </dt>
                </div>
              </dl>
            </div>
    </div>
  );
};

export default Step3;
