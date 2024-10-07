import React from 'react';
import css from "./SearchBar.module.css";
import { Field, Form, Formik } from 'formik';

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);  // Ensure this logs your query
    if (values.query.trim()) {
      setQuery(values.query);  // Make sure you call setQuery with the entered value
    }
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
