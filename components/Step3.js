import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useFormikContext, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';

const Step3 = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <div className="bg-white w-full shadow overflow-hidden sm:rounded-lg pb-4 flex flex-col items-center justify-center">
      <div className="px-4 py-5 sm:px-6 text-center">
        <h3 className="text-xl leading-6 font-bold text-black">
          Récapitulatif de votre commande
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Renseignez les informations pour vous faire livrer par
          ClicnCollect à Abidjan
        </p>
      </div>
      <div className="border-t border-gray-200 w-full">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:px-6 w-full">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nom"
                  label="First Name"
                  value={values.nom}
                  onChange={handleChange}
                  error={touched.nom && Boolean(errors.nom)}
                  helperText={touched.nom && errors.nom}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="prenom"
                  label="Last Name"
                  value={values.prenom}
                  onChange={handleChange}
                  error={touched.prenom && Boolean(errors.prenom)}
                  helperText={touched.prenom && errors.prenom}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="numero"
                  label="Order Number"
                  value={values.numero}
                  onChange={handleChange}
                  error={touched.numero && Boolean(errors.numero)}
                  helperText={touched.numero && errors.numero}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="poids"
                  label="Total Weight"
                  value={values.poids}
                  onChange={handleChange}
                  error={touched.poids && Boolean(errors.poids)}
                  helperText={touched.poids && errors.poids}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="montant"
                  label="Total Amount"
                  value={values.montant}
                  onChange={handleChange}
                  error={touched.montant && Boolean(errors.montant)}
                  helperText={touched.montant && errors.montant}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="description"
                  label="Order Description"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contact1"
                  label="Contact 1"
                  value={values.contact1}
                  onChange={handleChange}
                  error={touched.contact1 && Boolean(errors.contact1)}
                  helperText={touched.contact1 && errors.contact1}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contact2"
                  label="Contact 2"
                  value={values.contact2}
                  onChange={handleChange}
                  error={touched.contact2 && Boolean(errors.contact2)}
                  helperText={touched.contact2 && errors.contact2}
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Step3;
