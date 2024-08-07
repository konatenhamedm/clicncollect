import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';

const Step3 = () => {
  const { values, handleChange, errors, touched } = useFormikContext();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [touched2, setTouched2] = useState();

  const handleChangeFormatted = (e) => {
    const { name, value } = e.target;
    
    // Remove any non-digit characters
    const formattedValue = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedValue = formattedValue.slice(0, 10);
    
    // Add space after every 2 digits
    const spacedValue = limitedValue.replace(/(\d{2})(?=\d)/g, '$1 ');

    // Update the form values
    handleChange({
      target: {
        name,
        value: spacedValue,
      }
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="bg-white shadow-md overflow-hidden ">
          <div className="px-7 py-8  text-center">
          <h3 className="text-xl leading-6 font-bold text-black">
              Récapitulatif de votre commande
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Renseignez les informations pour vous faire livrer par ClicnCollect à Abidjan
            </p>
          </div>
          <div className="border-t border-gray-200 px-4">
          <dl>
              <div className="bg-gray-50 px-4 py-5 sm:px-6 w-full">
                {/* <Grid container spacing={2} >
                  <Grid item xs={6}> */}
                    <label
                      htmlFor="nom"
                      className={`block font-latoBold text-sm pb-2 ${touched.nom && errors.nom ? "text-red-400" : ""}`}
                    >
                      {touched.nom && errors.nom ? errors.nom : "Nom *"}
                    </label>
                    <input 
                      type='text'
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out duration-150"
                      name="nom"
                      placeholder='Inscrivez le nom utilisé lors de l’achat sur le site'
                      value={values.nom}
                      onChange={handleChange}
                      error={touched.nom && Boolean(errors.nom)}
                      helperText={touched.nom && errors.nom}
                    />
                 {/*  </Grid>
                  <Grid item xs={6}> */}
                    <label
                      htmlFor="prenoms"
                      className={`block font-latoBold text-sm pb-2 ${touched.prenoms && errors.prenoms ? "text-red-400" : ""}`}
                    >
                      {touched.prenoms && errors.prenoms ? errors.prenoms : "Prénoms *"}
                    </label>
                    <input 
                      type='text'
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                      name="prenoms"
                      placeholder="Inscrivez le prénoms utilisé lors de l’achat sur le site"
                      value={values.prenoms}
                      onChange={handleChange}
                      error={touched.prenoms && Boolean(errors.prenoms)}
                      helperText={touched.prenoms && errors.prenoms}
                    />
                 {/*  </Grid>
                </Grid> */}
               {/*  <Grid container spacing={2}>
                  <Grid item xs={6}> */}
                    <label
                      htmlFor="email"
                      className={`block font-latoBold text-sm pb-2 ${touched.email && errors.email ? "text-red-400" : ""}`}
                    >
                      {touched.email && errors.email ? errors.email : "Email *"}
                    </label>
                    <input 
                      type='text'
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                      name="email"
                      placeholder="Entrez votre email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                 {/*  </Grid>
                  <Grid item xs={6}> */}
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${touched.numero && errors.numero ? "text-red-400" : ""}`}
                    >
                      {touched.numero && errors.numero ? errors.numero : "Numéro de commande *"}
                    </label>
                    <input 
                      type='text'
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                      name="numero"
                      placeholder="Numéro de la commande"
                      value={values.numero}
                      onChange={handleChange}
                      error={touched.numero && Boolean(errors.numero)}
                      helperText={touched.numero && errors.numero}
                    />
                {/*   </Grid>
                </Grid> */}
                <label
                  htmlFor="montant"
                  className={`block font-latoBold text-sm pb-2 ${touched.montant && errors.montant ? "text-red-400" : ""}`}
                >
                  {touched.montant && errors.montant ? errors.montant : "Montant total de commande"}
                </label>
                <input 
                  type='text'
                  className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                  name="montant"
                  placeholder="Montant total de la commande"
                  value={values.montant}
                  onChange={handleChange}
                  error={touched.montant && Boolean(errors.montant)}
                  helperText={touched.montant && errors.montant}
                />
                <label
                  htmlFor="description"
                  className={`block font-latoBold text-sm pb-2 ${touched.description && errors.description ? "text-red-400" : ""}`}
                >
                  {touched.description && errors.description ? errors.description : "Description"}
                </label>
                <textarea 
                  type='text'
                  className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                  name="description"
                  placeholder="Marque, quantité…"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  rows={3}
                />
                <label
                  htmlFor="contact1"
                  className={`block font-latoBold text-sm pb-2 ${touched.contact1 && errors.contact1 ? "text-red-400" : ""}`}
                >
                  {touched.contact1 && errors.contact1 ? errors.contact1 : "Contact 1*"}
                </label>
                <input 
                  type='text'
                  className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                  name="contact1"
                  placeholder="xx xx xx xx"
                  value={values.contact1}
                  onChange={handleChangeFormatted}  // Utilisation de handleChangeFormatted ici
                  onBlur={() => setTouched2({ ...touched, contact1: true })}
                  error={touched.contact1 && Boolean(errors.contact1)}
                  helperText={touched.contact1 && errors.contact1}
                />
                <label
                  htmlFor="contact2"
                  className={`block font-latoBold text-sm pb-2 ${touched.contact2 && errors.contact2 ? "text-red-400" : ""}`}
                >
                  {touched.contact2 && errors.contact2 ? errors.contact2 : "Contact 2"}
                </label>
                <input 
                  type='text'
                  className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                  name="contact2"
                  placeholder="xx xx xx xx"
                  value={values.contact2}
                  onChange={handleChangeFormatted}  // Utilisation de handleChangeFormatted ici
                  onBlur={() => setTouched2({ ...touched, contact2: true })}
                  error={touched.contact2 && Boolean(errors.contact2)}
                  helperText={touched.contact2 && errors.contact2}
                />
              </div>
            </dl>
            <div className="px-4 py-0 sm:px-6 text-center">
            <h4 className="text-xl leading-6 font-bold text-black">
              Options de livraison à Abidjan
            </h4>
            <br />
          </div>
          <div className=" border-b-2 border-gray-200 w-full">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:px-6 w-full">
                <label
                  htmlFor="option"
                  className={`block font-latoBold text-sm pb-2 ${touched.option && errors.option ? "" : ""}`}
                >
                  Option de livraison*
                </label>
                <select
                    className="bg-white block w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-gray rounded-sm p-2 mb-4 sm:mb-0 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                    name="option"
                    onChange={(e) => {
                      handleChange(e);
                      setSelectedOption(e.target.value);
                    }}
                    value={values.option}
                  >
                    <option key="1" value="option1">
                      Retrait dans notre point relais à Cocody Angré
                    </option>
                    <option key="2" value="option2">
                      Livraison à votre domicile
                    </option>
                  </select>
                {selectedOption === "option1" && (
                  <>
                  <br/>
                  <h3 className="text-xl text-red-500">
                    Nous sommes ouverts du lundi au samedi de 9h à 18h
                  </h3>
                  </>
                )}
                {selectedOption === "option2" && (
                  <>
                    <label
                      htmlFor="adresseLivraison"
                      className={`block font-latoBold text-sm pb-2 ${touched.adresseLivraison && errors.adresseLivraison ? "text-red-400" : ""}`}
                    >
                      {touched.adresseLivraison && errors.adresseLivraison ? errors.adresseLivraison : "Adresse de livraison*"}
                    </label>
                    <input 
                      type='text'
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-normal rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-gray transition ease-in-out durée-150"
                      name="adresseLivraison"
                      placeholder=""
                      value={values.adresseLivraison}
                      onChange={handleChange}
                      error={touched.adresseLivraison && Boolean(errors.adresseLivraison)}
                      helperText={touched.adresseLivraison && errors.adresseLivraison}
                    />
                  </>
                )}
              </div>
            </dl>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
