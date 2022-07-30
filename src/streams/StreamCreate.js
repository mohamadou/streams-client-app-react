import React from "react";
import { Form, Field } from "react-final-form";

const StreamCreate = () => {
  const onSubmit = (formValues) => {
    //debugger;
    console.log(
      "StreamName: " +
        formValues.streamName +
        " Description: " +
        formValues.description
    );

    // props.onSubmit(formValues);
  };

  const validate = (e) => {
    const errors = {};

    if (e.streamName && e.streamName.length < 5) {
      errors.streamName = "Name is too short";
    }

    if (e.description && e.description.length < 10) {
      errors.description = "Description is too short";
    }

    return errors;
  };

  const required = (value) => (value ? undefined : "Required");

  const myForm = () => (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Create Stream Form</h2>
          <div>
            <Field name="streamName" validate={required}>
              {({ input, meta }) => (
                <div className="mt-3">
                  <label>Stream name</label>
                  <input
                    type="text"
                    {...input}
                    placeholder="Stream Name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {meta.touched && meta.error && (
                    <span className="text-[#e11d48]">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="description" validate={required}>
              {({ input, meta }) => (
                <div className="mt-3">
                  <label>Description</label>
                  <textarea
                    {...input}
                    placeholder="Description"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {meta.touched && meta.error && (
                    <span className="text-[#e11d48]">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <button
            type="submit"
            className="mt-4 nline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      )}
    />
  );

  return <div className="md:grid md:grid-cols-3 md:gap-6">{myForm()}</div>;
};

export default StreamCreate;
