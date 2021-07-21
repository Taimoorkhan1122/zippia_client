import React from 'react'
import { Field, Formik, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";

import styles from './search.module.css';

import * as Yup from "yup";
import { fetchPopuplarJobs } from '../api';


const Search = ({setData}) => {
    return (
      <div className={styles.searchContainer}>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const query = values.search.replace(" ", "%20");
            setData(await fetchPopuplarJobs(query));
          }}
          validationSchema={Yup.object({
            name: Yup.string().max(50, "maximum 50 characters are allowed!"),
          })}>
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="search"
                type="text"
                as={TextField}
                variant="outlined"
                placeholder="Karachi"
                label="search job"
              />
              <ErrorMessage
                name="search"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
              <Button type="submit" disabled={values.search.length === 0} variant="contained">
                Search
              </Button>
            </form>
          )}
        </Formik>
      </div>
    );
}

export default Search
