import React from "react"
import { useField } from "formik"
import { TextField } from '@material-ui/core';

export default ({
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <>
      <TextField
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <>{meta.error}</>
      ) : null}
    </>
  )
}
