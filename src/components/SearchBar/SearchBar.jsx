import React from 'react';
import css from "./SearchBar.module.css";
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast'; // Import toast

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (!values.query) {
      toast.error("Enter the word"); // Trigger toast if query is empty
      return;
    }
    
    if (values.query.trim()) {
      setQuery(values.query); 
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
